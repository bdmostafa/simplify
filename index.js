module.exports = function makeString(str) {
    if (typeof str !== "string") throw new TypeError("MakeString wants a string!");
    return str.replace(/\s/g, "");
  };