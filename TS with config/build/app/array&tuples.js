"use strict";
let arr1 = [10, "10,", true];
let strArr1 = [
    "shoes",
    "kurta",
    "jeans",
    true,
    10,
];
//tuple;
let arr3 = [10, "10,", true];
// console.log(arr3);
//object
let myObj;
myObj = [10, 320];
myObj = {
    name: "kartik",
};
let demoObj1 = {
    name: "Shivam",
    age: 10,
    human: true,
};
let demoObj2 = {
    name: "Shivam",
    age: 10,
    human: true,
};
let demoObj3 = {
    name: "Kartik",
    age: 16,
    human: true,
    hobbie: ["cricket", "rugby", true],
    company: { name: "Amazon", salary: 10 },
};
let anuvJainObj = {
    name: "anuv jain",
    age: 25,
    human: true,
    bestSong: "sdnsa",
};
let arijitSinghObj = {
    age: 45,
    human: false,
    bestSong: "sdnsa",
};
let jp = {
    name: "JP",
    age: 30,
    human: true,
};
// arijitSinghObj.bestSong ="dsfjnds" a big no for doing this
// console.log("🚀 ~ arijitSinghObj:", arijitSinghObj);
// console.log("🚀 ~ anuvJainObj:", anuvJainObj);
//function with type
const fn = (G1) => {
    if (G1.name) {
        console.log(G1.name);
    }
    else {
        console.log("hello");
    }
};
fn(jp);
