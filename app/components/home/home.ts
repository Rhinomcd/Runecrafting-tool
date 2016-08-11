import {Component}        from 'angular2/core';
import {RunescapeService} from '../../services/runescape.service';
import {OrderBy}          from './orderBy.pipe';
import {SettingsCmp}      from '../settings/settings';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  pipes: [OrderBy],
  directives: [SettingsCmp]

})

export class HomeCmp {
  items;

  constructor (private _RunescapeService: RunescapeService) {};


  ngOnInit() {
    this.items = this._RunescapeService.updatePrices();
  }

  calculatePricePerTrip() {
    var triptotal;
    var crafted = 28;
    for (var item of this.items) {
      triptotal = Number(item.price) * crafted;
    }
  }
    degrease() {
      console.log(this.items);
    }
  }

