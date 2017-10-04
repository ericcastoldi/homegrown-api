const sum = (prev, next) => {
    return prev.valor + next.valor; 
};

const calcAvgPrice = (row) => {
    if(!row.temHistorico) {
        return null;
    }
    
    return row.historico.reduce(sum) / row.historico.length;
};

const averagePrice = (rows) => {
    
    return rows.map(row => {
       const cloneRow = Object.assign({}, row);
       cloneRow.valorMedio = calcAvgPrice(cloneRow);
       
       return cloneRow;
    });
    
};


module.exports = averagePrice