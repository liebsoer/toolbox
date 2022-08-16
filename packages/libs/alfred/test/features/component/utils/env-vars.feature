Feature: env-vars
  Component test for env-vars.models.ts

  Background:
    Given an env variable object

  Scenario: Set simple env variable
    When "simple" env variable "FOO" is set to "BAR"
    Then the env variable object contains for the key "FOO" the value "BAR"

  Scenario: Set json env variable
    When "json" env variable "FOO" is set to "{hello: \”world\”}"
    Then the env variable object contains for the key "FOO" the value "{\”hello\”: \”world\”}"

  Scenario: Get simple env variable
    Given "simple" env varibale "FOO" with value "BAR"
    When env variable "FOO" is read
    Then the env variable value is "BAR"
    And the env variable value is of type "string"

  Scenario: Get json env variable
    Given "json" env varibale "FOO" with value "{\”hello\”: \”world\”}"
    When env variable "FOO" is read
    Then the env variable value is "{\”hello\”: \”world\”}"
    And the env variable value is of type "object"