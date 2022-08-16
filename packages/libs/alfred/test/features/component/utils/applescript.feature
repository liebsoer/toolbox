Feature: Testing AppleScript utils
  Component test for utils/applescript.models.ts

  Scenario: Execute HelloWorld AppleScript
    Given an applescript with content
      """
      return "Hello World!
      """
    When the applescript is executed
    Then the result is "Hello World!"