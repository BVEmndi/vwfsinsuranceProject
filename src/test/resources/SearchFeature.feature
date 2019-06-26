@1
Feature: Search
  As a User
  I want to check whether cover of the vehicle exists
  So that it is legally approved to go on roads


  Scenario Outline: Verify whether a vehicle exists
    Given User is the homepage
    When User searches the vehicle exists by "<Registration_Number>"
    Then the result page should display the information "<Message>"


    Examples:
      | Registration_Number | Message                               |
      | OV12UYY             | Result for : OV12UYY                  |
      | OV120YY             | Sorry record not found                |
      | )(&)&)              | Please enter a valid car registration |
      |                     | Please enter a valid car registration |