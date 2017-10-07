const baseParser = (rawRows) => {
    return rawRows.map(row => {
            const cloneRow = Object.assign({}, row);
            return {
                item: cloneRow.item,
                _raw: cloneRow
            };
    });
};

module.exports = baseParser;