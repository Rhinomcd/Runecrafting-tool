import {Injectable}       from 'angular2/core';
import {Item}             from '../model/Item';
import {SettingsObject}   from '../model/SettingsObject';


@Injectable()
export class LevelCalculator {
    settings: SettingsObject;

  constructor(settings: SettingsObject) {
    this.settings = settings;
  }

  public checkLevels(item: Item) : boolean {
    if (item.name === 'Cosmic Rune') {
      console.log(this.settings.rclevel === 27);
      return this.settings.rclevel === 27;
    }
  }
}
