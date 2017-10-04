const moment = require('moment');

const setPurchaseIntervals = (rows) => {
    
    return rows.map(row => {
        
        const cloneRow = Object.assign({}, row);
        if(!cloneRow.temHistorico) {
            return cloneRow;
        }
       
        const historico = cloneRow.historico.map((item, index, arr) => { 
            
            const cloneItem = Object.assign({}, item);
            if(index === 0) {
                cloneItem.diasDesdeUltimaCompra = 0;
                return cloneItem;
            }
            
            const prevIndex = index - 1;
            const prevItem = Object.assign({}, arr[prevIndex]);
            
            
            if(Boolean(cloneItem.data) === false 
                || Boolean(prevItem.data) === false) {
                cloneItem.diasDesdeUltimaCompra = 0;
                return cloneItem;
            }
            
            const currDate = moment(cloneItem.data);
            const prevDate = moment(prevItem.data);
            
            const diff = currDate.diff(prevDate, 'days');
            cloneItem.diasDesdeUltimaCompra = diff;
            
            return cloneItem;
        });
       
        return Object.assign({}, cloneRow, { 
            historico: historico 
        });
    });
};

module.exports = setPurchaseIntervals;