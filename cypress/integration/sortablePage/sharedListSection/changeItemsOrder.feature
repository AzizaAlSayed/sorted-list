Feature: Change list items order
  
Scenario: Verify that user can change list items order  
  Given A user was on the Shared List section
  When  The user drags item number 3 from left list
  When  The user drops item number 3 to the right list
  Then  item number 3 from left list should be shown at the right list
    
  