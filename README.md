# Meet App

## Description
This app is a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## User Stories

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default

Given a user does not actively select an element on the main page
When an event element is being displayed
Then the element is being displayed collapsed

Scenario 2: User can expand an event to see its details

Given a user selects an event to see its details
When the user expands the event
Then the user should see its details

Scenario 3: User can collapse an event to hide its details

Given a user selects an event to hide its details
When the user collapses the event
Then the user shouldn't see its details anymore

### FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number

Given a user can specify a number of events
When the user does not specify a concrete number
Then the  default number of events is 32

Scenario 2: User can change the number of events they want to see

Given a user can specify a number of events he or she can see
When the user enters the amount of events that he or she wants to see
Then the  given numbers of events are being shown

### FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection

Given the main page is open, but the user has no internet connection
When tthe user is being shown data
Then only cached data is being shown

Scenario 2: Show error when user changes the settings (city, time range)

Given the users tries to change settings
When tthe user submits wrong or unfitting information
Then the user is being shown an error

### FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city

Given the users wants to see a number of upcoming events in each city
When tthe user requests the data
Then data is being visualized in a chart for the user
