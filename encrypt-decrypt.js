// dependencies
const crypto = require('crypto');

//module scaffolding
const encryptDecrypt = {};

const algorithm = 'aes-256-ctr';

const iv = crypto.randomBytes(16);

encryptDecrypt.encrypt = (txt, secretKey) => {

    if (secretKey.length !== 32) {
        throw new TypeError("Secret key must be 32 characters length at least");
    }

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(txt), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

encryptDecrypt.decrypt = (hash, secretKey) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

module.exports = encryptDecrypt;