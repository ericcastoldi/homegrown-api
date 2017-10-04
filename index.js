const spreadsheet = require('./spreadsheet.js');
const parseRows = require('./parseRows.js');
const averagePrice = require('./averagePrice.js');
const averageInterval = require('./averageInterval.js');
const setPurchaseIntervals = require('./setPurchaseIntervals.js');
const logResult = require('./logResult.js');

const historyOnly = (rows) => {
  return rows.filter(row => { return row.temHistorico; });
};

spreadsheet.getRows()
        .then(parseRows)
        .then(averagePrice)
        .then(averageInterval)
        .then(setPurchaseIntervals)
        .then(historyOnly)
        .then(logResult)
        .catch(console.error);
