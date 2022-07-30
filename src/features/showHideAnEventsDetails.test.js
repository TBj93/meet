import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { extractLocations } from "../api";
import { mockData } from '../mock-data';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('a user does not actively select an element on the main page', () => {
            AppWrapper = mount(<App />);
        });
       
        when('an event element is being displayed', () => {
            AppWrapper.update();
        });

        then('the element is being displayed collapsed', () => {
            expect(AppWrapper.find('details')).toHaveLength(0);
        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
       
        let AppWrapper;
        given('a user selects an event to see its details', () => {
            AppWrapper = mount(<App />);
        });

        when('the user expands the event', () => {
            AppWrapper.update();
            AppWrapper.find('showHide').at(0).simulate('click');
        });

        then('the user should see its details', () => {
            expect(AppWrapper.find('details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('a user selects an event to hide its details', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('showHide').at(0).simulate('click');
        
        });

        when('the user collapses the event', () => {
           
            AppWrapper.find('showHide').at(0).simulate('click');
        });

        then('the user shouldn\'t see its details anymore', () => {
            expect(AppWrapper.find('details')).toHaveLength(0);
        });
    });
   

});