const spreadsheetService = require('./services/spreadsheet-service');
const consolePrinter = require('./printers/consolePrinter.js');
const discardRaw = require('./filters/discardRaw.js');

spreadsheetService.getItems()
    .then(discardRaw)
    .then(consolePrinter)
    .catch(console.error);



