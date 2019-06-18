const p2Rex = require("path-to-regexp");
const removeDiacritics = require('./core/remove-diacritics');

const pathMap = {
  "/xe-du-lich/suzuki/:slug(.*)": { page: "/car-suzuki" },
  "/xe-tai-nho/suzuki/:slug(.*)": { page: "/carry-suzuki" },
};

module.exports.pathMap = pathMap;

module.exports.parse = (urn, pathname) => {
  let keys = [];
  const urlRex = Object.keys(pathMap).find(
    urlPat => pathMap[urlPat].page === pathname
  );
  const px = p2Rex(urlRex, keys);
  let parts = px.exec(urn);
  parts = parts.slice(1);
  return keys.reduce((accum, k, index) => {
    accum[k.name] = parts[index];
    return accum;
  }, {});
};

module.exports.makeSlug = (string, id='') => {
  return removeDiacritics(string.toLowerCase()).replace(/([^\w\d]|\s)/ig, '-');
  // return [removeDiacritics(string.toLowerCase()).replace(/([^\w\d]|\s)/ig, '-'), id].join('-');
}
