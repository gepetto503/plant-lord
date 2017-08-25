import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import Moment from "moment";

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
                location={ticket.location}
                issue={ticket.issue}
                timeSinceOpened={ticket.timeSinceOpened}
                key={index}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
