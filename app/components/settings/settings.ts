import {Component, Output, EventEmitter}        from 'angular2/core';


@Component({
	selector: 'settings',
	templateUrl: './components/settings/settings.html',
	styleUrls: ['./components/settings/settings.css']
})

export class SettingsCmp {
  tripDuration: number;
  level: number = 0;
  @Output() levelChange = new EventEmitter();

  updateLevel(newLevel:number) {
  	this.level = newLevel;
  	this.levelChange.emit({
  		value: this.level
  	});
  }
}
