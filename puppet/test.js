const i = require("./handler");

const t = {};

i.index(t)
  .then(resp => console.log(JSON.stringify(resp)))
  .catch(e => console.log(e));
