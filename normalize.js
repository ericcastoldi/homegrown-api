const normalizeDate = (date) => {
    return date 
        ? new Date(date) 
        : null;
};

const normalizeCurrency = (value) => {
    return value 
        ? Number(value.replace('R$', '').replace(',', '.')) 
        : null;
};

module.exports = { 
    date: normalizeDate,
    currency: normalizeCurrency
}