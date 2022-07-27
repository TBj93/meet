import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'
import CitySearch from './CitySearch';
import Event from './Event';
import { getEvents } from './api';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {


  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  
  state = {
    events: [],
    locations: []
  }

  render() {
    return (
      <div className="App">
<NumberOfEvents/>  
<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <EventList events={this.state.events} />
    </div>
    );
  }
}

export default App;
