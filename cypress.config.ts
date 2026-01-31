import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      //сюда можно добавлять плагины, события
      return config;
    },
  },
});
