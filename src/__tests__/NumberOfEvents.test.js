import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
  
    test('render text input', () => {
      expect(NumberOfEventsWrapper.find('.events-count')).toHaveLength(1);
    });

    test('display 32 s default number', () => {
        expect(
          NumberOfEventsWrapper.find('.events-count').get(0).props.value
        ).toEqual(32);
      });

}
)