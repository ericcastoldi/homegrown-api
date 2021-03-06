process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./../../client-secret.json');


const getItems = () => {
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

                resolve(rows);
            });

        });
    });
};

module.exports = {
    getItems: getItems
};