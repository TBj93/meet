Feature: Show/hide an events details

Scenario: An event element is collapsed by default.
Given a user does not actively select an element on the main page
When an event element is being displayed
Then the element is being displayed collapsed

Scenario: User can expand an event to see its details.
Given a user selects an event to see its details
When the user expands the event
Then the user should see its details
	
Scenario: User can collapse an event to hide its details.
Given a user selects an event to hide its details
When the user collapses the event
Then the user shouldn't see its details anymore