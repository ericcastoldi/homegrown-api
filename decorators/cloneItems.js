const mapItems = require('./mapItems.js');

const cloneItems = (func) => {
    return mapItems(item => {
        return func(Object.assign({}, item));
    });
};

module.exports = cloneItems;