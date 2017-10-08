const cloneItems = require('../decorators/cloneItems.js');


const discardRaw = row => {
    delete row._raw;
    return row;
};

module.exports = cloneItems(discardRaw);