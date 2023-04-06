const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        experimentalSessionAndOrigin: true,
        defaultCommandTimeout: 5000,
        baseUrl: 'https://allo.ua/',
        viewportHeight: 1080,
        viewportWidth: 1920,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});