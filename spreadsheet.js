process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./client-secret.json');
const parseRows = require('./parseRows.js');

const getRows = () => {
    return new Promise((resolve, reject) => {
        
        const sheet = new GoogleSpreadsheet('1DxzIdHkuZPZq6Q_5etViHlEZIUPQJkgPqs8Wc49GfRg');
        
        sheet.useServiceAccountAuth(credentials, (authErr) => {

            if(authErr) {
                reject(authErr);
                return;
            }

            sheet.getRows(1, (getRowsErr, rows) => {
                if(getRowsErr){
                    reject(getRowsErr);
                    return;
                }
                
                resolve(parseRows(rows));
               
            });
           
        });
    });
};

//getSheetRows()
//    .then(rows => console.log(JSON.stringify(rows)))
//    .catch(console.error);
    
module.exports = { 
    getRows: getRows
};