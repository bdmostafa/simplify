# @mdmostafa/simplify

[![npm (scoped)](https://img.shields.io/npm/v/@mdmostafa/simplify.svg)](https://www.npmjs.com/package/@mdmostafa/simplify)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@mdmostafa/simplify.svg)](https://www.npmjs.com/package/@mdmostafa/simplify)

Removes all spaces from a string.

## Install

```
$ npm install @mdmostafa/simplify
```

## Usage

```js
const makeString = require("@mdmostafa/simplify");

makeString("Bangla desh");
//=> "Bangladesh!"

makeString(1234);
//=> Uncaught TypeError: makeString wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```