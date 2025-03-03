import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch : ["tests/recorded.spec.ts"],
  use:{
    baseURL:"https://ecommerce-playground.lambdatest.io/index.php?",
    headless:false,
    screenshot: "on",
    video: "on",
    launchOptions: {
      slowMo:1000 // it is msec
    }
  },
  fullyParallel:true,
  workers:1,
  retries:0,
  reporter: [
    ["dot"],
    ["json",{ outputfile: "jsonReports/jsonReport.json" }],
    ["html",{ open:"always" }]
  ]
};

export default config;