// Sometimes in interfaces you'd not know what will be the name is the key/index but you'd know the structure of it

//This is the index-signature

// interface Warehouse {
//    readonly [index: string]: number;
//   [index: string]: number;
// }

interface Warehouse {
  [index: string]: number;
  pizza: number;
  burgers: number;
  coke: number;
}
let myObjOne: Warehouse = {
  sandwich: 10,
  pizza: 10,
  burgers: 10,
  coke: 10,
};
// console.log("🚀 ~ myObjOne:", myObjOne);
// console.log(myObjOne['sandwich'])
let total: number = 0;
for (let items in myObjOne) {
  total += myObjOne[items];
}
// console.log("🚀 ~ total:", total);

// const prop: string = "pizza";
// console.log(myObjOne[prop]);

interface Student {
  // [key: string]: string | number | string[] | undefined;
  name: string;
  age: number;
  hobbies?: string[];
}

const studentOne: Student = {
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
const sys = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} is ${student[key]}`);
};
sys(
  {
    name: "Kartik",
    age: 50,
    hobbies: ["Hockey", "football"],
  },
  "hobbies"
);
