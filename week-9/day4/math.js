
// Whatever is exported is CACHED by Node.
module.exports = {
    counter: 0,
    add: add,
    subtract: subtract
};


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
