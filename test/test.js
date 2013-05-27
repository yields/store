var store = require('store');

function assert(expr, ms){
  if (expr) return;
  throw new Error(ms || 'major fail');
}

describe('store(key, val)', function(){
  it('should set the given `key` to `val`', function(){
    store('something', 'val');
    assert('val' == store('something'));
  })

  it('should `stringify` the value', function(){
    store('something', true);
    assert(true == store('something'));
  })
})

describe('store(key, null)', function(){
  it('should remove the item', function(){
    store('something', null);
    assert(null == store('something'));
  })
})

describe('store(key)', function(){
  it('should retrieve the value', function(){
    store('something', 0);
    assert(0 == store('something'));
  })

  it('should set objects', function () {
    store({ something : true, someone : false });
    assert(true == store('something'));
    assert(false == store('someone'));
  })
})

describe('store()', function(){
  it('should return an object', function(){
    store('foo', ['baz']);
    assert(1 == store().foo.length)
  })
})

describe('store(null)', function(){
  it('should remove all items', function(){
    store('baz', [22]);
    store(null);
    assert(0 == Object.keys(store()).length);
  })
})
