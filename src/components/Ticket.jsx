import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props){
  return (
    <div>
      <h2>{props.names}</h2>
      <h3>{props.location}</h3>
      <p>{props.issue}</p>
      <p>{props.timeSinceOpened}</p>
      <hr/>
    </div>
  );
}

// function displayTimeOpen(timeOpened) {
//   let now = new Moment(new Date());
//   let then = new Moment(timeOpened);
//   let stringTime = then.from(now, true);
//   return stringTime;
// }

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  timeSinceOpened: PropTypes.string.isRequired
};

export default Ticket;
