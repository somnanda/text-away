process.env.NODE_ENV = "DEV";
const { logger } = require("csg-cwf-shared-components").loggers;
const { getJWT } = require("./sso");
var fs = require("fs");
const yaml = require("js-yaml");
const config = yaml.safeLoad(
  fs.readFileSync("./resources/config.yaml", "utf8")
);
let username = "";
let password = "";
var tokens = [];
const seedwaterfallId = "11621f68-e149-48c4-ba8e-5015c7e01066";

if (process.argv[process.argv.length - 2] == "BETA") {
  username = "cwf_dev_tier2";
  password = "8HfXQq#P$r";
  console.log("Generating token for BETA user.");
} else {
  username = "cwf_dev_deladmin";
  password = "Xjj4@DLQp2";
  console.log("Generating token for ADMIN user.");
}
const env = process.argv[process.argv.length - 1];
getJWT({ username: username, password: password, env })
  .then(jwt => {
    if (env !== "workstation") {
      for (var i = 0; i < jwt.length; i++) {
        var object = jwt[i];
        for (var property in object) {
          if (property === "value") {
            tokens.push(object[property]);
          }
        }
      }
    }
    var json = JSON.stringify({});
    if (env === "qad") {
      console.log("Running Tests in QAD");
      json = JSON.stringify({
        url: config.url.qad,
        jwt: tokens[1],
        smsession: tokens[0]
      });
    } else if (env === "qat") {
      console.log("Running Tests in QAT");
      json = JSON.stringify({
        url: config.url.qat,
        jwt: tokens[1],
        smsession: tokens[0]
      });
    } else if (env === "uat") {
      console.log("Running Tests in UAT");
      json = JSON.stringify({
        url: config.url.uat,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "dev2") {
      console.log("Running Tests in DEV2");
      json = JSON.stringify({
        url: config.url.dev2,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "dev3") {
      console.log("Running Tests in DEV3");
      json = JSON.stringify({
        url: config.url.dev3,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "dev4") {
      console.log("Running Tests in DEV4");
      json = JSON.stringify({
        url: config.url.dev4,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "dev5") {
      console.log("Running Tests in DEV5");
      json = JSON.stringify({
        url: config.url.dev5,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "dev6") {
      console.log("Running Tests in DEV6");
      json = JSON.stringify({
        url: config.url.dev6,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "dev7") {
      console.log("Running Tests in DEV7");
      json = JSON.stringify({
        url: config.url.dev7,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    } else if (env === "workstation") {
      console.log("Running Tests in workstation");
      json = JSON.stringify({
        url: config.url.workstation,
        jwt,
        seedwaterfallId
      });
    } else {
      console.log("Running Tests in DEV");
      json = JSON.stringify({
        url: config.url.dev,
        jwt: tokens[1],
        smsession: tokens[0],
        seedwaterfallId
      });
    }
    fs.writeFile("tokens.json", json, "utf8", err => {
      if (err) {
        return console.log(err);
      }
      console.log("Tokens.json file saved successfully!");
    });
  })
  .catch(e => logger.error(e));
