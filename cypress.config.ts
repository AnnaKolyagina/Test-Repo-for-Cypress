import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); //подключить плагин Allure
      return config;
    },
  },
});



