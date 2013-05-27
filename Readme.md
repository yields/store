
# store

  minimal store inspired by [component/cookie](https://github.com/component/cookie)

## Installation

    $ component install yields/store

## Example

```js
store('foo', ['baz']);
store('foo'); // > ['baz']
store({ foo: 'baz' });
store('foo'); // > 'baz'
store('foo', null);
store('foo'); // > null
store('baz', 0);
store(); // > { baz: 0 }
store(null);
store(); // > {}
```

## API

### store(key, val)

set `key` to `val`, the value will be `JSON.stringify()`ied.

### store(obj)

store the given `object`.

### store(key, null)

remove `key`.

### store(key)

get `key` value, it will be unserialized.

### store(null)

invokes `localStorage.clear()`

### store()

get all items, they will be unserialized.

## License

  MIT
