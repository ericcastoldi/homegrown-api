const historyRequired = require('../../decorators/historyRequired.js');

const historyShortcutsParser = (row) => {
    console.log('historyShortcutsParser ', row.item);
    const first = row.historico[0];
    const last = row.historico[row.historico.length - 1];

    row.primeiroHistorico = Object.assign({}, first);
    row.ultimoHistorico = Object.assign({}, last);

    return row;
};


module.exports = historyRequired(historyShortcutsParser);