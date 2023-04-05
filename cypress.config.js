const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {},
        experimentalSessionAndOrigin: true,
        defaultCommandTimeout: 5000,
        baseUrl: 'https://allo.ua/',
        viewportHeight: 1080,
        viewportWidth: 1920,
        setupNodeEvents(on, config) {},
    },
});