import { ReportersOptions } from '@wdio/types';
import { resolve } from 'path';

// WebdriverIO configuration file
export const config: WebdriverIO.Config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.ts' // Adjust the path based on where your tests are located
    ],

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }, {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        'geckodriver',
        ['devtools', {}] // For Chrome and Firefox debugging
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }] as ReportersOptions
    ],

    onPrepare: function (config, capabilities) {
        console.log('Preparing for the test run...');
    },

    before: async function () {
        require('ts-node').register({ files: true });
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    onComplete: function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report');
        const generation = require('child_process').spawnSync('npx', ['allure', 'generate', 'allure-results', '--clean'], { stdio: 'inherit' });
        if (generation.error) {
            console.error(reportError);
        }
    },

    maxInstances: 10,
    retry: {
        attempts: 2
    },

    outputDir: resolve(__dirname, 'logs')
};
