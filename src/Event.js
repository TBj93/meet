import React, { Component } from "react";

class Event extends Component {
  render() {

    const { event } = this.props;
    return <div className = "event">

        <p className="event-description"> {event.description}</p>

    </div>;
  }
}
export default Event;