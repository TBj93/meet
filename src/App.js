import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import EventGenre from './EventGenre';
import CitySearch from './CitySearch';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';
import {
   ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


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


  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };


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
      <div className="App bg">
      
 
<br></br>

<WarningAlert text={this.state.warningText} />
<h1>The Meet App </h1>

<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
<p>Choose a city</p>
<br></br>
<NumberOfEvents updateEvents={this.updateEvents} numberShown={this.state.numberShown} />  
<p>Number of events you want to see</p>
<div className="data-vis-wrapper">
  
   
<ResponsiveContainer height={400}>

<ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="category" dataKey="city" name="city" />
  <YAxis type="number" dataKey="number" name="number of events" />
 
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
 
  <Scatter data={this.getData()} fill="#8884d8" />
  </ScatterChart>
</ResponsiveContainer>

<EventGenre events={this.state.events} />

</div>

      <EventList events={this.state.events} />
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} /> 
    </div>
    );
  }
}

export default App;
