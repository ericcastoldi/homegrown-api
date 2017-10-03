const normalize = require('./normalize.js');

const createHistoryItem = (valor, data, obs) => {
    
    const item = {
        valor: normalize.currency(valor),
        valorExibicao: valor,
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

const parseRow = (row) => {
    
    const lastEditPropName = 'app:edited';
    const edited = row.hasOwnProperty(lastEditPropName) ? row[lastEditPropName] : null;
    
    const history = buildHistory(row);
    return {
       ultimaAtualizacao: new Date(edited),
       item: row.item,
       categoria: row.categoria,
       historico: history
    };
};

const parseRows = (rawRows) => {
    return rawRows.map(parseRow);
};

module.exports = parseRows;