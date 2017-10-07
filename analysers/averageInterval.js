const moment = require('moment');
const historyRequired = require('../decorators/historyRequired.js');

const averageInterval = (row) => {
    const first = row.primeiroHistorico;
    const last = row.ultimoHistorico;

    if(Boolean(first.data) === false
        || Boolean(last.data) === false) {
        return null;
    }

    const firstDate = moment(first.data);
    const lastDate = moment(last.data);

    const avgInterval = lastDate.diff(firstDate, 'days') / (row.historico.length - 1);
    row.intervaloMedio = Math.round(avgInterval);
    return row;
};

module.exports = historyRequired(averageInterval);