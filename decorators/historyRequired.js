const cloneItems = require('./cloneItems.js');

const historyRequired = (func) => {
    return cloneItems(row => {
        if(!row.temHistorico) {
            return row;
        }

        return func(row);
    });
};


module.exports = historyRequired;