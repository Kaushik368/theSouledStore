const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
        name: "Chrome",
        version: "11",
        },
        device: "Hp Notebook 15",
        platform: {
        name: "Windows",
        version: "10",
        },
    },
    customData: {
            title: "Run info",
            data: [
              { label: "Project", value: "Cypress project for The Souled Store" },
              { label: "Release", value: "0.1" },
              { label: "Cycle", value: "A1" },
              { label: "Execution Start Time", value: "20th April 2023, 11:30 AM EST" },
              { label: "Execution End Time", value: "22th April 2023, 11:50 PM EST" },
            ],
    },
});