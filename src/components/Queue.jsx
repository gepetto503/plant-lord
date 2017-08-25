import React from "react";
import PlantList from "./PlantList";
import NewPlantControl from "./NewPlantControl";

class Queue extends React.Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      masterPlantList: [],
    };
    this.addNewPlantToList = this.addNewPlantToList.bind(this);
    this.updatePlantTimeSinceOpened = this.updatePlantTimeSinceOpened.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updatePlantTimeSinceOpened(),
      5000
    );
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }

  addNewPlantToList(newPlant){
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }


  updatePlantTimeSinceOpened() {
     console.log("check");
     //this whole blob breaks up the stateful array into a temporary new array and then.. what? updates the time on each plant?
     let newMasterPlantList = this.state.masterPlantList.slice();
     newMasterPlantList.forEach((plant) =>
       plant.setTimeSinceOpened()
     );
     console.log('setState');
     this.setState({masterPlantList:newMasterPlantList})
  }

  render(){
    console.log('render');
    return (
      <div>
        <PlantList
          plantList = {this.state.masterPlantList}/>
        <NewPlantControl onNewPlantCreation = {this.addNewPlantToList}/>
      </div>
    );
  }
}

export default Queue;
