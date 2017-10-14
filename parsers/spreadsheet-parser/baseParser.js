const cloneItems = require('../../decorators/cloneItems.js');


const baseParser = row => {
    return {
        item: row.item,
        _raw: row
    };
};

module.exports = cloneItems(baseParser);