import React from "react";
import Plant from "./Plant";
import PropTypes from "prop-types";
import Moment from "moment";
import { Button }  from "react-bootstrap";

function PlantList(props){
  return (
    <div>
      <hr/>
      {props.plantList.map((plant, index) =>
        <Plant
          plant={plant}
          name={plant.name}
          wateringFrequency={plant.wateringFrequency}
          timeSinceWatered={plant.timeSinceWatered}
          key={index}/>
      )}
    </div>
  );
}

PlantList.propTypes = {
  plantList: PropTypes.array
};

export default PlantList;
