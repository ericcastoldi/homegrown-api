const spreadsheet = require('./spreadsheet.js');
const parseRows = require('./parseRows.js');
const historyOnly = require('./historyOnly.js');
const averagePrice = require('./averagePrice.js');
const averageInterval = require('./averageInterval.js');
const setPurchaseIntervals = require('./setPurchaseIntervals.js');
const logResult = require('./logResult.js');

spreadsheet.getRows()
        .then(parseRows)
        .then(historyOnly)
        .then(averagePrice)
        .then(averageInterval)
        .then(setPurchaseIntervals)
        .then(logResult)
        .catch(console.error);
