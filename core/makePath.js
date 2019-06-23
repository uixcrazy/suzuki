const removeDiacritics = require('./remove-diacritics');

module.exports.makePath = (string, id='') =>
  removeDiacritics(string.toLowerCase()).replace(/([^\w\d]|\s)/ig, '-');
