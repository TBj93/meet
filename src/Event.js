import React, { Component } from "react";
import { useState } from "react";

class Event extends Component {


  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    const { collapsed } = this.state;
    const { event } = this.props;
   
   
    return (

        
    
    <div className = "event">

<button className="showHide" 
 onClick={this.handleClick}

>
{collapsed ? "Show Details" : "Hide Details"}

</button>

   <p className="event-date"> {event.start.dateTime}</p>
        <p className="event-description"> {event.description}</p>
        <p className="event-summary"> {event.summary}</p>
     

    </div>

    )
  }
}
export default Event;