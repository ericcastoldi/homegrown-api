const moment = require('moment'); 

const normalizeDate = (date) => {
    return date 
        ? moment(date, "DD-MM-YYYY").toDate()
        : null;
};

const normalizeCurrency = (value) => {
    return value 
        ? Number(value.replace('R$', '').replace(',', '.')) 
        : null;
};

module.exports = { 
    date: normalizeDate,
    currency: normalizeCurrency
}