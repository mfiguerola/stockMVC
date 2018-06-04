const storage = require('node-persist');

function init() {
  return storage.init({
    dir: 'db',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: false,
    continuous: true,
    interval: false,
    ttl: false,
    expiredInterval: 2 * 60 * 1000,
    forgiveParseErrors: false
  });
}

function getItem(key) {
  return storage.getItem(key);
}

function setItem(key, data) {
  return storage.setItem(key, data);
}

module.exports = {
  init: init,
  getItem: getItem,
  setItem: setItem
};
