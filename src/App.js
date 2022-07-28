import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'
import CitySearch from './CitySearch';

import { getEvents, extractLocations } from './api';

import NumberOfEvents from './NumberOfEvents';

class App extends Component {

  state = {
    events: [],
    locations: [],
numberShown:32
  }



  updateEvents = (location, number) => {
    getEvents().then((events) => {

     const eventNumber = number;

      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      numberShown: eventNumber,
      events: locationEvents.slice(0, number),
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  


  render() {
    return (
      <div className="App">
        <p>Number of events</p>
<NumberOfEvents  numberShown={this.state.numberShown} updateEvents={this.updateEvents}/>  
<br></br>
<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <EventList events={this.state.events} />
    </div>
    );
  }
}

export default App;
