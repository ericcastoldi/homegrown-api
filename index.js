const spreadsheet = require('./spreadsheet.js');
const parseRows = require('./parseRows.js');
const averagePrice = require('./averagePrice.js');
const logResult = require('./logResult.js');

spreadsheet.getRows()
        .then(parseRows)
        .then(averagePrice)
        .then(logResult)
        .catch(console.error);
