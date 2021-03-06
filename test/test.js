var assert = require('assert');
var isPlainObject = require('../index.cjs.js');

describe('isPlainObject', function() {
  describe('on null', function() {
    it('should return false', function() {
      assert.equal(isPlainObject(null), false);
    });
  });

  describe('on undefined', function() {
    it('should return false', function() {
      assert.equal(isPlainObject(), false);
    });
  });

  describe('on Number', function() {
    it('should return false', function() {
      assert.equal(isPlainObject(100), false);
    });
  });

  describe('on String', function() {
    it('should return false', function() {
      assert.equal(isPlainObject('foo'), false);
    });
  });

  describe('on Boolean', function() {
    it('should return false', function() {
      assert.equal(isPlainObject(true), false);
    });
  });

  describe('on Array', function() {
    it('should return false', function() {
      assert.equal(isPlainObject([1, 2, 3]), false);
    });
  });

  describe('on Plain Object', function() {
    it('should return true', function() {
      assert.equal(isPlainObject({ a: 100, b: 200 }), true);
    });
  });

  describe('on Object.create({})', function() {
    it('should return true', function() {
      assert.equal(isPlainObject(Object.create({})), true);
    });
  });

  describe('on Object.create(null)', function() {
    it('should return false', function() {
      assert.equal(isPlainObject(Object.create(null)), false);
    });
  });

  describe('on function', function() {
    it('should return false', function() {
      assert.equal(
        isPlainObject(function() {
          return true;
        }),
        false
      );
    });
  });
});
