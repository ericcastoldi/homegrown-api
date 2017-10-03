process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./client-secret.json');

const sheet = new GoogleSpreadsheet('1DxzIdHkuZPZq6Q_5etViHlEZIUPQJkgPqs8Wc49GfRg');

sheet.useServiceAccountAuth(credentials, (authErr) => {

    if(authErr) {
        console.error(authErr);
        return;
    }

    sheet.getRows(1, (err, rows) => {
        if(err){
            console.error(err);
            return;
        }
            
       console.log(rows); 
    });
   
});