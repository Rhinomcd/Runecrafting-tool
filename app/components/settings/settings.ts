import {Component}        from 'angular2/core';


@Component({
	selector: 'settings',
	templateUrl: './components/settings/settings.html',
	styleUrls: ['./components/settings/settings.css']
})

export class SettingsCmp {
  tripDuration: number;
  level: number = 0;
}
