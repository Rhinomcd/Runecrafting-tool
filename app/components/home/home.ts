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
    console.log(this.items);
    this.items = this._RunescapeService.updatePrices();
  }

  calculatePricePerTrip(item: Item) {
    var crafted = 28;


    return Number(item.price) * crafted;
  }
  }

