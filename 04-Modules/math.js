// Math module

function sum(a, b) {
    return a + b;
}
// OR
// exports.sum = (a, b) => a + b; // Another way of exporting

function sub(a, b) {
    return a - b;
}
// OR
// exports.sub = (a, b) => a - b; 

// module.exports = sum;

module.exports = {
    sum,
    sub
};

// module.exports = {
//     addFn: sum,
//     subFn: sub
// };