const moment = require('moment');

const calcAvgInterval = (row) => {
    if(!row.temHistorico) {
        return null;
    }
    
    const first = row.historico[0];
    const last = row.historico[row.historico.length - 1];
    
    if(Boolean(first.data) === false 
        || Boolean(last.data) === false) {
        return null;
    }
    
    const firstDate = moment(first.data);
    const lastDate = moment(last.data);
    
    return lastDate.diff(firstDate, 'days') / (row.historico.length - 1)
};


const averageInterval = (rows) => {
    return rows.map(row => {
       const cloneRow = Object.assign({}, row);
       cloneRow.intervaloMedio = calcAvgInterval(cloneRow);
       
       return cloneRow;
    });
};

module.exports = averageInterval;