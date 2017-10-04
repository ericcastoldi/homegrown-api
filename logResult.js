const logResult = (rows) => { 
    console.log(JSON.stringify(rows, null, 2));
    return Object.assign({}, rows);
};


module.exports = logResult;