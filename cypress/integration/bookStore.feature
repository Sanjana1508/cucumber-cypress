Feature:Book Store
Scenario:Search for book
    Given User opens url "https://demoqa.com/books"
    When User types in "Learning JavaScript"
    And User clicks on "Learning JavaScript Design Patterns"
    Then User should see title "Learning JavaScript Design Patterns"
    And User should see author "Addy Osmani"
    And User should see publisher "O'Reilly Media"