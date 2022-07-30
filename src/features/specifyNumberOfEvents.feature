Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user can specify a number of events
When the user does not specify a concrete number
Then the default number of events is 32

Scenario: User can change the number of events they want to see
Given a user can specify a number of events he or she can see
When the user enters the amount of events that he or she wants to see
Then the given numbers of events are being shown