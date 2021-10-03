Feature:Login
Scenario:log into conduit
    Given User open "https://admin-demo.nopcommerce.com/login"
    When User type in
                | username | password |
                | admin@yourstore.com | admin |
    And User click on sign in button
    Then "Dashboard" should be visible