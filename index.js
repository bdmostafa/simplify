// Dependencies
const crypto = require('crypto');
const Events = require('./events');

// Module scaffolding
const functions = {};

// Remove empty space in string
functions.makeString = (str) => {
    if (typeof str !== "string") throw new TypeError("MakeString wants a string!");
    return str.replace(/\s/g, "");
  };

// Make token by hashing the string with signature
// Store into local storage
functions.makeToken = (str, secretKey) => {
    if (typeof str === 'string' && str.length > 0 && typeof secretKey === 'string' && secretKey.length > 0) {
        const hash = crypto
            .createHmac('sha256', secretKey)
            .update(str)
            .digest('hex');
            if (typeof window !== 'undefined') {
                localStorage.setItem('simplifyToken', hash);
            } else {
                token = hash;
            }
            return hash;
    } else {
        throw new TypeError("hash wants a string and secret key!");
    }
};

let token = '';

// Verify token by the selected string with signature
// Compare with local storage
functions.verifyToken = (str, secretKey) => {
    if (typeof str === 'string' && str.length > 0 && typeof secretKey === 'string' && secretKey.length > 0) {
        const hash = crypto
            .createHmac('sha256', secretKey)
            .update(str)
            .digest('hex');
            if (typeof window !== 'undefined') {
                const tokenId = localStorage.getItem('simplifyToken');

                if (tokenId === hash) return 'Your key is valid'; 
                return 'Your key/string is not valid';
            } else {
                if (token === hash) return 'Your key is valid'; 
                return 'Your key/string is not valid';
            }
            
    } else {
        throw new TypeError("hash wants a string and secret key!");
    }
};

// Event emit and listening
functions.Events = Events;

module.exports = functions;