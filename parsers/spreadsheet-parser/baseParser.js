const cloneItems = require('../../decorators/cloneItems.js');


const baseParser = row => {
    console.log('baseParser ', row.item);
    return {
        item: row.item,
        _raw: row
    };
};

module.exports = cloneItems(baseParser);