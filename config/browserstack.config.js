require("dotenv").config();
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './test/specs/mobile-ui/**/*.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android CA',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID,
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 100000,
  connectionRetryTimeout: 900000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: [[
    'allure', {
      outputDir: './test-execution_report/browserstack/allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 200000
  }
};
