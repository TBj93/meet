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

   <p className="event-date"> {event.start.dateTime}</p>
<p className="event-summary"> {event.summary}</p>
<button className="showHide" 
 onClick={this.handleClick}

>
{collapsed ? "Show Details" : "Hide Details"}

</button>


      
 
         {!collapsed && (
          <div className="details">
            <h3>More details</h3>
            <p className="event-description">{event.description}</p>
          </div>
        )}

    </div>

    )
  }
}
export default Event;