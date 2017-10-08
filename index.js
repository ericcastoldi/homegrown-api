// const spreadsheetService = require('./services/spreadsheet-service');
// const consolePrinter = require('./printers/consolePrinter.js');
// const discardRaw = require('./filters/discardRaw.js');
//
// spreadsheetService.getItems()
//     .then(discardRaw)
//     .then(consolePrinter)
//     .catch(console.error);
//

const receiptFile = './parsers/receipt-parser/test-receipts/cervejas-x300.jpeg';
const receiptProvider = require('./parsers/receipt-parser');
receiptProvider.getReceipt(receiptFile)
    .then(result => { console.log(result.text); process.exit(0); } )
    .catch(console.error);
