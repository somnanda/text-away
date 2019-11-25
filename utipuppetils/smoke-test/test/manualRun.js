
const i = require('../index');

const t = {
};

i.handler(t)
  .then(resp => console.log(JSON.stringify(resp)))
  .catch(e => console.log(e));
