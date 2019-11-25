var shell = require('shelljs');

if (process.platform.toLowerCase().includes('win')) {
    shell.exec('mocha specs_local/*');
} else {
    shell.exec('jest --coverage --coverageDirectory=output/coverage/jest');
}
