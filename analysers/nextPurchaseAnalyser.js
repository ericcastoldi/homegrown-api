const moment = require('moment');
const historyRequired = require('../decorators/historyRequired.js');

const defineNextPurchase = (row, nextPurchase) => {
    row.proximaCompra =  nextPurchase.toDate();
    return row;
};

const intervalSuggestion = (row) => {

    if(Boolean(row.ultimoHistorico.data) === false) {
        return defineNextPurchase(row, moment());
    }

    const intervalo = row.intervaloMedio;
    const ultimaCompra = moment(row.ultimoHistorico.data);
    const dataDaProximaCompra = ultimaCompra.add(intervalo, 'days');

    const proximaCompraFicouNoPassado = (dataDaProximaCompra.toDate() < moment().toDate());
    return (proximaCompraFicouNoPassado)
        ? defineNextPurchase(row, moment())
        : defineNextPurchase(row, dataDaProximaCompra);
};

module.exports = historyRequired(intervalSuggestion);