const rowParser = (row) => {
    const cloneRow = Object.assign({}, row);
    if(!cloneRow.temHistorico) {
        return cloneRow;
    }

    const first = cloneRow.historico[0];
    const last = cloneRow.historico[row.historico.length - 1];
    cloneRow.primeiroHistorico = Object.assign({}, first);
    cloneRow.ultimoHistorico = Object.assign({}, last);

    return cloneRow;
};


const historyShortcutsParser = (rows) => {
    return rows.map(rowParser);
};

module.exports = historyShortcutsParser;