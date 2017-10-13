const normalize = require('../normalize.js');
const cloneItems = require('../../decorators/cloneItems.js');


const createHistoryItem = (valor, data, obs) => {

    const item = {
        valor: normalize.currency(valor),
        data: normalize.date(data),
        observacoes: obs
    }

    return item;
}

const hasHistoryProps = (row, propValor, propData, propObs) => {

    return (row.hasOwnProperty(propValor) && Boolean(row[propValor]))
        || (row.hasOwnProperty(propData)  && Boolean(row[propData]))
        || (row.hasOwnProperty(propObs) && Boolean(row[propObs]));
};

const buildHistory = (row) => {

    const history = [];

    const valorPrefix = 'valor';
    const dataPrefix = 'data';
    const observacoesPrefix = 'observações';

    let index = 1;
    let propValor = valorPrefix + index;
    let propData = dataPrefix + index;
    let propObs = observacoesPrefix + index;


    while(hasHistoryProps(row, propValor, propData, propObs))
    {
        const item = createHistoryItem(row[propValor], row[propData], row[propObs])
        history.push(item);

        index++;
        propValor = valorPrefix + index;
        propData = dataPrefix + index;
        propObs = observacoesPrefix + index;
    }

    return history;

};

const historyParser = (row) => {
    console.log('historyParser ', row.item);
    const history = buildHistory(row._raw);
    row.historico = history;
    row.temHistorico = history.length > 1;
    return row;
};

module.exports = cloneItems(historyParser);