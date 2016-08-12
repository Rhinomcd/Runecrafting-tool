import {Component, Output, EventEmitter}        from 'angular2/core';
import {SettingsObject}   from '../../model/SettingsObject';


@Component({
	selector: 'settings',
	templateUrl: './components/settings/settings.html',
	styleUrls: ['./components/settings/settings.css']
})

export class SettingsCmp {
  tripDuration: number;
  Defaultlevel: number = 1;

  DefaultPouches = {
    small: false,
    medium: false,
    large: false,
    giant: false
  };

  Settings: SettingsObject = {
    rclevel: this.Defaultlevel,
    Pouches: this.DefaultPouches
  };

  @Output() settingsChange = new EventEmitter();

  updateLevel(newLevel:number) {
  	this.Settings.rclevel = newLevel;
  	this.settingsChange.emit(this.Settings);
  }
  updateSmallPouch(state: boolean) {
    this.Settings.Pouches.small = state;
    this.settingsChange.emit(this.Settings);
  }
  updateMediumPouch(state: boolean) {
    this.Settings.Pouches.medium = state;
    this.settingsChange.emit(this.Settings);
  }
  updateLargePouch(state: boolean) {
    this.Settings.Pouches.large = state;
    this.settingsChange.emit(this.Settings);
  }
  updateGiantPouch(state: boolean) {
    this.Settings.Pouches.giant = state;
    this.settingsChange.emit(this.Settings);
  }
}
