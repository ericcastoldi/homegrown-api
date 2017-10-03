const spreadsheet = require('./spreadsheet.js');


const averageProductValue = () => {
    spreadsheet.getRows()
        .then(rows => {
            const updatedRows = rows.map(row => {
                const cloneRow = Object.assign({}, row);
                if(cloneRow.historico.length <= 1){
                   cloneRow.valorMedio = null;
                   return cloneRow;
                }
               
               const valorTotal = cloneRow.historico.reduce((prev, next) => { return prev.valor + next.valor; });
               cloneRow.valorMedio = valorTotal / cloneRow.historico.length;
               
               return cloneRow;
            });
            
            console.log(JSON.stringify(updatedRows));
        })
        .catch(console.error);
};

averageProductValue();