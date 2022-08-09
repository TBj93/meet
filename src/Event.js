import React, { Component } from "react";


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
      
   <h2 className="event-summary"> {event.summary}</h2>
   <p className="event-location"> {event.location}</p>
   <p className="event-date"> {event.start.dateTime}</p>
 

<button className="showHide" 
 onClick={this.handleClick}

>
{collapsed ? "Show Details" : "Hide Details"}

</button>


      
 
         {!collapsed && (
         
          <div className="details">
            <h4>More details</h4>
            <p className="event-description">{event.description}</p>
          </div>
        )}

    </div>

    )
  }
}
export default Event;