import {Component, ViewEncapsulation}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {HomeCmp}                        from '../home/home';
import {SettingsCmp}                    from '../settings/settings';
import {RunescapeService}               from '../../services/runescape.service';
import {PriceCalculator}                from '../../services/priceCalculator';

@Component({
  selector: 'app',
  viewProviders: [RunescapeService, PriceCalculator],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/home', component: HomeCmp, as: 'Home', useAsDefault: true },
  { path: '/settings', component: SettingsCmp, as: 'Settings', useAsDefault: false }
  ])
export class AppCmp {}
