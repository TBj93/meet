import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { extractLocations } from "../api";
import { mockData } from '../mock-data';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');


defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
       
        let AppWrapper;
        given('a user can specify a number of events', () => {
            AppWrapper = mount(<App />);
        });

        when('the user does not specify a concrete number', () => {
            AppWrapper.update();
            //default number 32
        });
           //in this case 2 for local mode
        then(/^the default number of events is (\d+)$/, (arg0) => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('a user can specify a number of events he or she can see', async () => {
           
            AppWrapper = await mount(<App />);
          });

        when('the user enters the amount of events that he or she wants to see', () => {
            AppWrapper.update();
            AppWrapper.find(".events-count").simulate("change", { target: { value: 2 } });
        });

        then('the given numbers of events are being shown', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

});