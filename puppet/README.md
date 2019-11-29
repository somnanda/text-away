# Citco Smoke Test Lambda

Puppeteer test framework for execuing tests on Chrome browser headlessly.


## To Run locally

```sh
$ npm install --production
$ npm install
$ node test/manualRun.hs
```


## To Run on Lambda

  - Push your working code to master. Then CodePipeline will start deploying your lambda here:

[ CSG-Developer @ citcodevops01  Role Required ]

```sh
https://eu-west-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/release-ops-inf-csg-cwf-eu-west-1-cpl/view?#
```

  - Once deployed you can execute your Lambda here:

[ CSG-Developer @ 911962207156  Role Required]

```sh
https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/functions/dev-csg-cwf-smoke-test?tab=graph
```

## TODO

  - Incorporate ES6 object-oriented style of programming and using Page-Object design pattern to write your tests
  - Use a config.yaml file to store all key values. No hard-coded string values in code. All key-values should reference this config file.
  - Run test against Prod environment by getting Prod credentials from AWS Key-Manager
