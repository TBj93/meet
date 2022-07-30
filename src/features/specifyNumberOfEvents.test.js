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
        given('a user can specify a number of events', () => {

        });

        when('the user does not specify a concrete number', () => {

        });

        then(/^the default number of events is (\d+)$/, (arg0) => {

        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('a user can specify a number of events he or she can see', () => {

        });

        when('the user enters the amount of events that he or she wants to see', () => {

        });

        then('the given numbers of events are being shown', () => {

        });
    });

});