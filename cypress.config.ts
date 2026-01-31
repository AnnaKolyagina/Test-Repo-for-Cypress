import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,

  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/junit-[hash].xml",
    toConsole: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      //сюда можно добавлять плагины, события
      return config;
    },
  },
});
