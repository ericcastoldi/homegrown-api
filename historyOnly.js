const historyOnly = (rows) => {
  return rows.filter(row => { return row.temHistorico; });
};

module.exports = historyOnly;