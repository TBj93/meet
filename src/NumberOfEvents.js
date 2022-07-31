import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

//default number 32 being shown
    state = {
            numberShown: 32,
        }
   
   // show specific number
   handleInputChanged = (event) => {

      
    const value = event.target.value;
 

    if (value > 0 && value < 33) {
       
        this.setState({
                numberShown: value,
                errorText: '',
            });
            this.props.updateEvents(undefined, value);
          } else {
            return this.setState({
              numberShown: value,
              errorText: 'invalid number',
            });
       
}
   }
        render() {

          return (
            <div className="NumberOfEvents">
               <ErrorAlert text={this.state.errorText} />
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