import React, { Component } from 'react';

class NumberOfEvents extends Component {

//default number 32 being shown
    state = {
            numberShown: 32,
        }
   
   // show specific number
    handleInputChanged = (event) => {

      
        const value = event.target.value;

       
            this.setState({
                numberShown: value
           
            });
            this.props.updateEvents(value);
    }
  
        render() {

          return (
            <div className="NumberOfEvents">
      <input
         type="text"
          className="events-count"
         value={this.state.numberShown}
          onChange={this.handleInputChanged}
          >
        </input>

          </div>
          );
        }
  
    }

export default NumberOfEvents;