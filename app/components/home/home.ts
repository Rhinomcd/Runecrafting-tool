import {Component}        from 'angular2/core';
import {RunescapeService} from '../../services/runescape.service';
import {PriceCalculator}  from '../../services/priceCalculator';
import {OrderBy}          from './orderBy.pipe';
import {SettingsCmp}      from '../settings/settings';
import {Item}             from '../../model/Item';
import {SettingsObject}             from '../../model/SettingsObject';


@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  pipes: [OrderBy],
  directives: [SettingsCmp]

})

export class HomeCmp {
  constructor (private _RunescapeService: RunescapeService) {};
  settings: SettingsObject;
  items: Item[];
  _PriceCalculator;


  ngOnInit() {
    this.items = this._RunescapeService.updatePrices();
    this.settings = new SettingsObject();
    this._PriceCalculator = new PriceCalculator(this.settings);
  }

  settingsChange(event) {
    this.settings = event;
    this._PriceCalculator = new PriceCalculator(this.settings);
  }

  calculatePricePerTrip(item: Item) : number  {
    item.revenue = this._PriceCalculator.calcRevenue(item);
    return item.revenue;
  }
  calculateGP(item: Item): number {
    return this._PriceCalculator.calcGP(item);
  }
}
