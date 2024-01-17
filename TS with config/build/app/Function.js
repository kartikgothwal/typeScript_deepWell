"use strict";
const lsg = (message) => {
    console.log("🚀 ~ lsg ~ message:", message);
};
function addFn(a, b) {
    return `${a + b}`;
}
lsg(addFn(30, 30));
const irk = function (val1, val2) {
    return Math.pow(val1, val2);
};
// console.log(irk(3, 3));
const sub = function (a, b) {
    return a - b;
};
console.log(sub(150, 30));
