import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let  EventWrapper, event ;
    beforeAll(() => {
        event = mockData[0];
      EventWrapper = shallow(<Event event= {event} />);
    
    });

// tests for rendering the details themselves

   test('renders event startdate', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
  });
    test('renders event description', () => {
        expect(EventWrapper.find('.event-description')).toHaveLength(1);
      });

    test('renders event summary', () => {
        expect(EventWrapper.find('.event-summary')).toHaveLength(1);
      });

// tests for the button
      test("render button", () => {
        expect(EventWrapper.find(".showHide")).toHaveLength(1);
      });


      test("show additional details when the button is clicked", () => {
        EventWrapper.setState({
          collapsed: true,
        });
        EventWrapper.find(".showHide").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
      });
    

})