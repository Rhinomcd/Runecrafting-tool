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
    var crafted = 28;
    console.log(item.id)
    if (item.id == '561'){
      console.log("trueth!23432")
    }
    switch (item.id) {
      case '561': //Nature
          console.log('In nats')
        if (this.rclevel >= 91) {
          crafted = crafted * 2;
        }
        break;

      case 'Cosmic Rune': //Cosmic
        if (this.rclevel >= 59) {
          crafted = crafted * 2;
        }

      case '9075': //Astral
      if (this.rclevel >= 82) {
        crafted = crafted * 2;
      }
      default:
        break;
    }
    return Number(item.price) * crafted;
  }
}

