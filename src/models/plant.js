import Moment from "moment";

class Plant {
  constructor(name, wateringFrequency) {
    this.name = name;
    this.wateringFrequency = wateringFrequency;
    this.timeOpened = new Moment();
    this.timeSinceWatered = "a few seconds";
    this.timeTilWatering = 100;
  }

  setTimeSinceOpened() {
    this.timeSinceWatered = this.timeOpened.fromNow(true);
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceWateredChecker);
  }

}

export default Plant;
