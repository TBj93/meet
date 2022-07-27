import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    let locations, NumberOfEventsWrapper;
    beforeAll(() => {
      locations = extractLocations(mockData);
      NumberOfEventsWrapper = shallow(<NumberOfEvents locations={locations} />);
    });



}
)