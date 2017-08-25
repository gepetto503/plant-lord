import React from "react";
import Plant from "../models/Plant.js";
import PropTypes from "prop-types";

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewPlantFormSubmission = this.handleNewPlantFormSubmission.bind(this);
  }

  handleNewPlantFormSubmission(event) {
    event.preventDefault();
    const {_name, _watering} = this.refs;
    var newPlant = new Plant(_name.value, _watering.value);
    this.props.onNewPlantCreation(newPlant);
    this.props.hideFormAfterSubmission();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPlantFormSubmission}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Plant Name"/>
          <input
            ref="_watering"
            type="text"
            id="watering"
            placeholder="Water Once Every..."/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

NewPlantForm.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NewPlantForm;
