import React, { Component } from 'react';

class NumberOfEvents extends Component {

    constructor() {
        super();
        this.state = {
            numberShown: 32,
            errorText: ''
        }
    }
   
    handleInputChanged = (event) => {
        if (event.target.value > 0 && event.target.value <= 32) {
            this.setState({
                numberShown: value,
                errorText: ''
            })
        } else {
            this.setState({
                numberShown: value,
                errorText: 'invalid number'
            });
        }
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