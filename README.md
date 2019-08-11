# type-is-plain-object

A utility to test if a 'value' has a type of 'Object' and it was created by the Object constructor.

## Installation

Using [npm](https://www.npmjs.com/package/type-is-plain-object)

```console
npm i type-is-plain-object
```

## Usage

In Node (CommonJS)

```js
const isPlainObject = require('type-is-plain-object');

// on "undefined" -> false
console.log(isPlainObject());

// on "null" -> false
console.log(isPlainObject(null));

// on "number" -> false
console.log(isPlainObject(100));

// on "string" -> false
console.log(isPlainObject('foo'));

// on "boolean" -> false
console.log(isPlainObject(true));

// on "plain object" -> true
console.log(isPlainObject({ a: 100, b: 200 }));

// on "array" -> false
console.log(isPlainObject([1, 2, 3]));

// on "function" -> false
console.log(
  isPlainObject(function() {
    return 'bar';
  })
);
```

In the Browser (ES6 modules):

```js
import isPlainObject from 'type-is-plain-object';
```

## Contributing

If you find any issues, feel free to submit a pull request

## Author

[iClusterDev](https://github.com/iClusterDev)

## License

This project is under the [MIT](LICENSE) License
