import {Component}        from 'angular2/core';
import {RunescapeService} from '../../services/runescape.service';
import {OrderBy}          from './orderBy.pipe';
import {SettingsCmp}      from '../settings/settings';
import {Item}             from './model/Item';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  pipes: [OrderBy],
  directives: [SettingsCmp]

})

export class HomeCmp {
  items: Item[];

  rclevel: number;
  constructor (private _RunescapeService: RunescapeService) {};



  ngOnInit() {
    this.items = this._RunescapeService.updatePrices();
  }

  levelChange(event) {
    this.rclevel = event.value;
  }

  calculatePricePerTrip(item: Item) {
    var baseCrafted = 28;
    var crafted = baseCrafted;
    switch (item.id) {
      case 561: //Nature
          console.log('In nats');
        if (this.rclevel >= 91) {
          crafted = baseCrafted * 2;
        }
        break;

      case 564: //Cosmic
        if (this.rclevel >= 59) {
          crafted = baseCrafted * 2;
        }

      case 9075: //Astral
      if (this.rclevel >= 82) {
        crafted = baseCrafted * 2;
      }
      default:
        break;
    }
    return Number(item.price) * crafted;
  }
}

