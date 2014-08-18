
var assert = require('component/assert');
var store = require('../index');

describe('store', function(){
  beforeEach(function(){
    store(null);
  });

  describe('(key, value)', function(){
    it('should set `key`, `value`', function(){
      assert.equal(null, store('key'));
      store('key', 'value');
      assert.equal('value', store('key'));
    });
  });

  describe('(key)', function(){
    it('should get a key', function(){
      assert.equal(null, store('key'));
      store('key', 'value');
      assert.equal('value', store('key'));
    });
  });

  describe('()', function(){
    it('should return all data', function(){
      assert.equal(null, store('key'));
      store('key', 'value');
      store('other', 'value');
      assert.deepEqual(store(), {
        key: 'value',
        other: 'value'
      });
    });
  });

  describe('(null)', function(){
    it('should remove all data', function(){
      assert.equal(null, store('key'));
      store('a', 'value');
      store('b', 'value');
      store(null);
      assert.deepEqual(store(), {});
    });
  });
});
