const spreadsheetProvider = require('../../providers/spreadsheet-provider/index');
const baseParser = require('../../parsers/spreadsheet-parser/baseParser.js');
const historyParser = require('../../parsers/spreadsheet-parser/historyParser.js');
const historyShortcutsParser = require('../../parsers/spreadsheet-parser/historyShortcutsParser.js');
const historyOnly = require('../../filters/historyOnly.js');
const averagePrice = require('../../analysers/averagePrice.js');
const averageInterval = require('../../analysers/averageInterval.js');
const setPurchaseIntervals = require('../../analysers/setPurchaseIntervals.js');
const nextPurchaseAnalyser = require('../../analysers/nextPurchaseAnalyser.js');

const spreadsheetService = () => {
    return new Promise((resolve, reject) => {
            spreadsheetProvider.getItems()
                .then(baseParser)
                .then(historyParser)
                .then(historyShortcutsParser)
                .then(historyOnly)
                .then(averagePrice)
                .then(averageInterval)
                .then(setPurchaseIntervals)
                .then(nextPurchaseAnalyser)
                .then(resolve)
                .catch(reject);
        });
};

module.exports = {
  getItems: spreadsheetService
};


