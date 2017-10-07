const historyRequired = require('../decorators/historyRequired.js');

const sum = (prev, curr) => {
    return prev.valor + curr.valor;
};

const averagePrice = (row) => {
    row.valorMedio = row.historico.reduce(sum) / row.historico.length;
    return row;
};

module.exports = historyRequired(averagePrice);


