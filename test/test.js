const assert = require('assert');
const myPackage = require('../boundle/index.cjs');

describe('myPackage', function() {
  describe('on null', function() {
    it('should return false', function() {
      assert.equal(null, null);
    });
  });
});
