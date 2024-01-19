"use strict";
let A1 = "hello"; //More specific type
let A2 = A1; //less specific type
let A3 = A1; //more specific type
//you can give type with an Angle brackets
let A4 = "Hello";
let A5 = "hello";
const addOrSub = (a, b, c) => {
    if (c == "add")
        return a + b;
    if (c == "concat")
        return "" + a + b;
    return "Hello";
};
//types is given
let myValStr = addOrSub(10, 10, "concat");
//be careful here beauced typecriopt thinks that there us no error here but a string is getting returned here so be careful
// let myValNum: number = addOrSub(10, 10, "concat") as number;
// console.log("🚀 ~ myValNum:", typeof myValNum);
//double type casting
// 10 as "string"
10;
function assertAndGetValue(input) {
    if (typeof input === "string") {
        return input.toUpperCase(); // Okay now, because we asserted the type.
    }
    else {
        throw new Error("Input is not a string.");
    }
}
let result = assertAndGetValue("hello");
console.log("🚀 ~ result:", result);
