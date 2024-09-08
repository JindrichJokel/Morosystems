MoroSystems WebdriverIO Test Automation
=======================================

This project is built with WebdriverIO for automating testing of the MoroSystems website

Prerequisites
-------------

To run this project, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [Git](https://git-scm.com/)

Setup Instructions
------------------

### 1\. Clone the Repository


### 2\. Install Dependencies

`npm install`

We installed the following packages during development:

-   `@wdio/cli`: WebdriverIO command-line interface.
-   `@wdio/local-runner`: Service for running tests locally.
-   `@wdio/devtools-service`: Provides access to the Chrome DevTools Protocol.
-   `@wdio/allure-reporter`: For generating Allure reports.
-   `@wdio/mocha-framework`: Mocha as the testing framework.
-   `@wdio/spec-reporter`: For basic terminal reporting.
-   `@rpii/wdio-html-reporter`: For generating HTML reports.
-   `allure-commandline`: For generating and serving Allure reports.

### 3\. Running the Tests

You can run the automated test suite using the following command:


`npx wdio run wdio.conf.ts`


### 4\. Viewing Reports

This project uses two types of reports: **Allure** and **HTML**.

#### 4.1 Allure Reports

To generate and view Allure reports:

1.  Run the tests with the following command:

    `npx wdio run wdio.conf.ts`

2.  After the tests are completed, generate the Allure report:


    `npx allure generate allure-results --clean`

3.  Serve the Allure report and view it in your browser:


    `npx allure open`

This will automatically open the Allure report in your default browser.


### 5\. Additional Tools Installed

-   `@rpii/wdio-html-reporter`: Used for advanced HTML reporting of test results.
-   `@wdio/allure-reporter`: Generates Allure reports for detailed test result insights.
-   `allure-commandline`: Command-line interface to generate and serve Allure reports.
-   `@wdio/cli`: WebdriverIO's command-line interface for test execution.
-   `@wdio/devtools-service`: Provides access to the Chrome DevTools Protocol.
-   `@wdio/local-runner`, `@wdio/mocha-framework`, and other WebdriverIO-related services to execute tests locally.

* * * * *
