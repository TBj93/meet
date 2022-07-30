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
    savedLocation: 'all',
    numberShown:32
  }



  updateEvents = (location, eventCount) => {

    if (eventCount === undefined) {
      eventCount = this.state.numberShown;
  } else(
      this.setState({ numberShown: eventCount })
  )
  if (location === undefined) {
      location = this.state.savedLocation;
  }

    getEvents().then((events) => {


      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      numberShown: eventCount,
      events: locationEvents.slice(0, eventCount),
      savedLocation: location
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
      
 
<br></br>
<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
<p>Number of events</p>
<br></br>
<NumberOfEvents updateEvents={this.updateEvents} numberShown={this.state.numberShown} />  
      <EventList events={this.state.events} />
    </div>
    );
  }
}

export default App;
