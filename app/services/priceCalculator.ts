import {Injectable}       from 'angular2/core';
import {Item}             from '../model/Item';
import {SettingsObject}   from '../model/SettingsObject';


@Injectable()
export class PriceCalculator {
    settings: SettingsObject;

  constructor(settings: SettingsObject) {
    this.settings = settings;
  }

  public calcRevenue(item: Item): number {
      var baseCrafted = 28 + this.pouchMath();
      var crafted = baseCrafted;
      switch (item.id) {
        case 561: //Nature
        if (this.settings.rclevel >= 91) {
          crafted = baseCrafted * 2;
        }
        break;

        case 564: //Cosmic
        if (this.settings.rclevel >= 59) {
          crafted = baseCrafted * 2;
        }

        case 9075: //Astral
        if (this.settings.rclevel >= 82) {
          crafted = baseCrafted * 2;
        }
        default:
        break;
      }
      return Number(item.price) * crafted;
    }
    pouchMath() {
      var additionalRunes = 0;
      let pouches = this.settings.Pouches;

      if (pouches.small) {
        additionalRunes += 2;
      }
      if (pouches.medium) {
        additionalRunes += 5;
      }
      if (pouches.large) {
        additionalRunes += 8;
      }
      if (pouches.giant) {
        additionalRunes += 11;
      }
      return additionalRunes;
    }
}
