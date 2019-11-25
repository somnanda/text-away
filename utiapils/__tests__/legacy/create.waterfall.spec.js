import frisby from 'frisby';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import chakram from 'chakram';
const assert = chakram.expect;
import utils from '../../src/utilities/waterfall';

describe('Waterfall Test for Legacy dataset', function () {

  const clientId = '30';
  let token = {};
  
  it("Create New Waterfall for Legacy dataset", function (done) {
    utils.createWaterfall();
    setTimeout(() => {
      done();
    }, 5 * 1000);
  });
});