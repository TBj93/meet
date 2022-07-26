import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let  EventDetailsWrapper, event ;
    beforeAll(() => {
        event = mockData[0];
      EventDetailsWrapper = shallow(<Event event= {event} />);
    
    });

    test('renders event details', () => {
        expect(EventDetailsWrapper.find('.event-description')).toHaveLength(1);
      });


})