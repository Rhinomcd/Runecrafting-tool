
export class SettingsObject {
  constructor() {
    this.rclevel = 1;
    this.tripDuration = 120;
    this.Pouches = {
      small: false,
      medium: false,
      large: false,
      giant: false
    };
  };

  tripDuration: number;
  rclevel: number;
  Pouches: {
    small: boolean,
    medium: boolean,
    large: boolean,
    giant:boolean
  };
}
