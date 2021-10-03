Feature:Fill a form
Scenario:Fill a form
    Given User opens url "https://demoqa.com/automation-practice-form"
    When User type in firstName "Sanjana"
    And User type in lastName "Podduturi"
    And User type in email "sanjana@mail.com"
    And User selects gender "Female"
    And User type in mobile number "9876543210"
    And User type in dob "12 August 2021"
    And User type in subjets "Java"
    And User selects hobbies as "Music"
    And User types in address "Hyderabad"
    And User selects state as "Haryana"
    And User selects city as "Panipat"
    When User clicks submit
    Then User should see "Thanks for submitting the form"