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
//optional Parameters of a Functions
const addParamsFn = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
//default params values
const sumParamsFn = (a, b, c = 100) => {
    return a + b + c;
};
console.log("values", sumParamsFn(10, 3, undefined));
//Rest params
const subFn = (a, ...nums) => {
    return a + nums.reduce((Acc, currItem) => Acc + currItem);
};
console.log(subFn("Hello", 20, 30));
//never type
const neverFn = (errorMsg) => {
    throw new Error(errorMsg);
};
const infiniteFn = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
    return i;
};
try {
    neverFn("This is an error");
}
catch (error) {
    console.log(error.message);
}
//custom type guard
const isNumber = (a) => {
    return a == "number" ? true : false;
};
//when to use never
const numOrStr = (value) => {
    let val = new Error("hello");
    if (typeof value == "string")
        return "string";
    if (isNumber(value))
        return "number";
    return "This is a explicit error";
};
console.log(numOrStr(10));
