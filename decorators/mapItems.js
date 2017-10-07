
const mapItems = (func) => {
    return (items) => {
        return items.map(func);
    };
};

module.exports = mapItems;