"use strict";
// Sometimes in interfaces you'd not know what will be the name is the key/index but you'd know the structure of it
let myObjOne = {
    sandwich: 10,
    pizza: 10,
    burgers: 10,
    coke: 10,
};
// console.log("🚀 ~ myObjOne:", myObjOne);
// console.log(myObjOne['sandwich'])
let total = 0;
for (let items in myObjOne) {
    total += myObjOne[items];
}
const studentOne = {
    name: "Kartik",
    age: 50,
    hobbies: ["Hockey", "football"],
};
// for (let keys in studentOne) {
//   console.log(`${keys} value is ${studentOne[keys as keyof Student]}`);
// }
//if you dont know the type of studentOne
// Object.keys(studentOne).map((key) => {
//   console.log(`${key} is  ${studentOne[key as keyof typeof studentOne]}`);
// });
//keyof with function;
const sys = (student, key) => {
    console.log(`Student ${key} is ${student[key]}`);
};
sys({
    name: "Kartik",
    age: 50,
    hobbies: ["Hockey", "football"],
}, "hobbies");
