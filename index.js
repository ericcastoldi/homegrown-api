const spreadsheetService = require('./services/spreadsheet-service');
const consolePrinter = require('./printers/consolePrinter.js');

spreadsheetService.getItems()
    .then(consolePrinter)
    .catch(console.error);
