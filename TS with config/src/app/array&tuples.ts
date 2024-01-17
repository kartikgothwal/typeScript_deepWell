let arr1 = [10, "10,", true];
let strArr1: (string | boolean | number)[] = [
  "shoes",
  "kurta",
  "jeans",
  true,
  10,
];
//tuple;
let arr3: [number, string, boolean] = [10, "10,", true];
// console.log(arr3);

//object
let myObj: object;
myObj = [10, 320];
myObj = {
  name: "kartik",
};
let demoObj1 = {
  name: "Shivam",
  age: 10,
  human: true,
};
let demoObj2: { name: string; age: number; human: boolean } = {
  name: "Shivam",
  age: 10,
  human: true,
};

//object with type
// type typeGiver = {
//   name: string;
//   age: number;
//   human: boolean;
//   hobbie: (string | boolean)[];
//   company: {
//     name: string;
//     salary: number;
//   };
// };
// type typeGiver = {
//   name: string;
//   age: number;
//   human: boolean;
//   hobbie: (string | boolean)[];
//   company: {
//     name: string;
//     salary: number;
//   };
// };
interface typeGiver {
  name: string;
  age: number;
  human: boolean;
  hobbie: (string | boolean)[];
  company: {
    name: string;
    salary: number;
  };
}

let demoObj3: typeGiver = {
  name: "Kartik",
  age: 16,
  human: true,
  hobbie: ["cricket", "rugby", true],
  company: { name: "Amazon", salary: 10 },
};
// console.log(demoObj3);

//side cases

type guitarist = {
  name?: string;
  age: number;
  human: boolean;
  bestSong?: string;
};

let anuvJainObj: guitarist = {
  name: "anuv jain",
  age: 25,
  human: true,
  bestSong: "sdnsa",
};
let arijitSinghObj: guitarist = {
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
const fn = (G1: guitarist) => {
  if (G1.name) {
    console.log(G1.name);
  } else {
    console.log("hello");
  }
};
fn(jp);
