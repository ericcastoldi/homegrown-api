var tesseract = require('tesseract.js');


const getReceipt = (imgPath) => {
  return new Promise((resolve, reject) => {
          tesseract.recognize(imgPath, {
              lang:'por',
            tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#()/*@%-.'
          })
            .progress(console.log)
            //.then(console.log)
            .catch(reject)
            .finally(resolve);
      });
};

module.exports = {
 getReceipt: getReceipt
}

// Consumo:
// const receiptFile = './parsers/receipt-parser/test-receipts/cervejas-zoom-1.jpeg';
// const receiptProvider = require('./parsers/receipt-parser');
// receiptProvider.getReceipt(receiptFile)
//     .then(result => { console.log(result.text); process.exit(0); } )
// .catch(console.error);
