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
const { makeString, makeToken, verifyToken, Events, encrypt, decrypt } = require("@mdmostafa/simplify");

makeString("Bangla desh");
//=> "Bangladesh!"

makeString(1234);
//=> Uncaught TypeError: makeString wants a string!
//    at simplify (<anonymous>:2:41)
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

const myEvent = new Events();

// Event listening
myEvent.listen('loadMsg');
//=> Listening to your event...
//=> Hello Bangladesh!

// creating event with message
myEvent.log('loadMsg', 'Hello Bangladesh!');

// Encrypt - Decrypt Usages text or buffer
const secretKey = 'OVH6sdmpNWjRR+qC*(7rdxs01lwH654@';

const hash = encrypt('Hello Node JS!', secretKey);

const hashFromBuffer = encrypt(Buffer.from('Hello Node JS!', 'utf8'), secretKey);

console.log(hash);

//=> {
//=>     iv: '418e5653829e3c902a4512e260ff356d',
//=>     content: '9e6e67bd5715c72a47fb6434cd6a'
//=> }

const txt = decrypt(hash, secretKey);
const txt2 = decrypt(hashFromBuffer, secretKey);

console.log(txt); 
//=> Hello Node JS!
console.log(txt2); 
//=> Hello Node JS!

```