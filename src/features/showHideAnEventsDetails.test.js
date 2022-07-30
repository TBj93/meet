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
        given('a user does not actively select an element on the main page', () => {

        });

        when('an event element is being displayed', () => {

        });

        then('the element is being displayed collapsed', () => {

        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('a user selects an event to see its details', () => {

        });

        when('the user expands the event', () => {

        });

        then('the user should see its details', () => {

        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('a user selects an event to hide its details', () => {

        });

        when('the user collapses the event', () => {

        });

        then('the user shouldn\'t see its details anymore', () => {

        });
    });
   

});