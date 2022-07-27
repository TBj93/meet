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

        const value = event.target.value;
        this.setState({ 
            numberShown: value 
        });

        if (event.target.value > 0 && event.target.value < 33) {
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