Feature:  clear-items-data
  Component test for clear-items-data.models.ts

  Background: 
    Given a storage

  Scenario: Clear empty storage
    When all item data are cleared
    Then the storage contains 0 elements

  Scenario: Clear storage with elements
    Given storage has an element with key "hello" and value "world"
    And storage has an element with key "foo" and value "bar"
    Then the storage contains 0 elements