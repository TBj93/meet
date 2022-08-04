import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'
import CitySearch from './CitySearch';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';

import NumberOfEvents from './NumberOfEvents';

class App extends Component {



  
  state = {
    events: [],
    locations: [],
    savedLocation: 'all',
    numberShown:32,
    warningText:'',
    showWelcomeScreen: undefined
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


  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
    if (this.mounted) {
    this.setState({ events, locations: extractLocations(events) });
    }
    console.log(navigator.onLine);
    if (!navigator.onLine) {
      this.setState({ warningText: 'offline'});
    }
    });
    }
    }
    







  componentWillUnmount(){
    this.mounted = false;
   if (!this.mounted) {
      this.setState({ warningText: 'offline'});
    }  
  }
  


  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
    className="App" />
    

    return (
      <div className="App">
      
 
<br></br>
<WarningAlert text={this.state.warningText} />
<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
<p>Number of events</p>
<br></br>
<NumberOfEvents updateEvents={this.updateEvents} numberShown={this.state.numberShown} />  
      <EventList events={this.state.events} />
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />

    </div>
    );
  }
}

export default App;
