# Citco Waterfall End-to-End Test Framework

WebdriverIO test framework using:
 - Mocha-Chai Frameworks
 - Local and Grid Test Runners configs
 - Allure Reporting


# Execute Tests on Local/Selenium Grid

## To Run locally

```sh
$ npm test
$ npm run report
```


## To Run on Selenium Grid

```sh
$ npm run test-suite
```

### Selenium Grid Dashboard

    - http://10.43.39.76:4444/dashboard

### Selenium Grid Live View

    - http://10.43.39.76:4444/grid/admin/live


# Local Selenium Grid Config

### Hub Setup

 - Download Selenium Standalone jar file on your local machine

```sh
$ java -jar selenium-server-standalone-3.12.0.jar -role hub -hubConfig gridHubConfig.json
```

### Node Setup

```sh
$ java -Dwebdriver.gecko.driver="./drivers/geckodriver" -jar selenium-server-standalone-3.12.0.jar -role node -nodeConfig gridNodeConfig.json
```

