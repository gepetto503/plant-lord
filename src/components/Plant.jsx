import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
// import Plant from "../models/Plant.js";
import { Button }  from "react-bootstrap";

function Plant(props){
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Water every: {props.wateringFrequency}</h3>
      <p>Time Since "Watered" (which at this point means added to list): <strong>{props.timeSinceWatered}</strong></p>
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={waterPlant()}>
                  Water Dis Bih
      </Button><hr/>
    </div>
  );
}

function waterPlant(Plant) {

  console.log('hi');
  // this.timeOpened = new Moment();
  // this.timeSinceWatered = "a few seconds";
}

function setTimeSinceOpened() {
  this.timeSinceWatered = this.timeOpened.fromNow(true);
}


// function displayTimeOpen(timeOpened) {
//   let now = new Moment(new Date());
//   let then = new Moment(timeOpened);
//   let stringTime = then.from(now, true);
//   return stringTime;
// }

Plant.propTypes = {
  plant: PropTypes.object,
  name: PropTypes.string,
  wateringFrequency: PropTypes.string,
  timeSinceWatered: PropTypes.string.isRequired
};

export default Plant;
