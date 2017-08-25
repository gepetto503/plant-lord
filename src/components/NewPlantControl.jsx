import React from "react";
import NewPlantForm from "./NewPlantForm";
import PropTypes from "prop-types";
import { Button }  from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewPlantControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {
      formModalIsShowing: false
    };
  }

  showFormModal(){
    this.setState({
      formModalIsShowing: true
    });
  }

  hideFormModal(){
    this.setState({
      formModalIsShowing: false
    });
  }

  //what to render in reacts virtual dom
  render(){
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.showFormModal}>
            Add Plant
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
           <Modal.Header>
             <Modal.Title>Add a new Plant to the catalog</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <NewPlantForm
              onNewPlantCreation={this.props.onNewPlantCreation}
              hideFormAfterSubmission = {this.hideFormModal}/>
           </Modal.Body>
         </Modal>
      </div>
    );
  }
}

NewPlantControl.propTypes = {
  onNewPlantCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
};


export default NewPlantControl;
