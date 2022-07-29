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
        given('user hasn’t searched for any city', () => {

        });

        when('the user opens the app', () => {

        });

        then('all resulting elements should be collapsed by default', () => {

        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('the user has started a search', () => {

        });

        when('the user clicks on the \'show details\' button', () => {

        });

        then('the user should see the details', () => {

        });
    });


test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('the user has opened an events\' details', () => {

        });

        when('the user clicks the \'hide details\' button', () => {

        });

        then('events\' details should collapse', () => {

        });
    });



});