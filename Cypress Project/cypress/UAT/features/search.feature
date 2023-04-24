Feature:  To validate Search Bar of THE SOULED STORE

    Scenario: TC051
        Given open the men's page and verify the search bar
        When verifing the search bar via screensort
        Then Search Bar verified Successfully

    Scenario: TC052
        Given open the men's page and validate the search bar
        When validate the search bar using an input data
        Then Search Bar validated Successfully

    Scenario: TC053
        Given open the searched page by products
        When verifing the filter via screensort
        Then filter section verified Successfully

    Scenario: TC055
        Given open the searched page by theme
        When verifing the filter 2 via screensort
        Then filter 2 section verified Successfully

    Scenario: TC057
        Given open the searched page by size
        When verifing the filter 3 via screensort
        Then filter 3 section verified Successfully

    Scenario: TC059
        Given open the searched page by color
        When verifing the filter 4 via screensort
        Then filter 4 section verified Successfully

    Scenario: TC061
        Given open the searched page by sorting
        When verifing the sorting via screensort
        Then sorting section verified Successfully

    Scenario: TC063
        Given open the searched page by clear button
        When verifing the clear button via screensort
        Then clear button section verified Successfully
