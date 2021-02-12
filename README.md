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
const { makeString, makeToken, verifyToken } = require("@mdmostafa/simplify");

makeString("Bangla desh");
//=> "Bangladesh!"

makeString(1234);
//=> Uncaught TypeError: makeString wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1

makeToken("bangladesh", "secretKey");
//=> 331d261003455b2b3659af7f8c046a4dc96a9bc0d0692d714cff35775e5a25aa

makeToken("", "secretKey");
makeToken("bangladesh", "");
//=> TypeError: hash wants a string and secret key!

verifyToken("bangladesh", "secretKey");
//=> Your key is valid

verifyToken("bangladesh", "abcd");
//=> Your key/string is not valid

```