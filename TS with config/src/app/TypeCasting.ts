type one = string;
type two = string | number;
type three = "Hello";

let A1: one = "hello"; //More specific type
let A2 = A1 as two; //less specific type
let A3 = A1 as three; //more specific type

//you can give type with an Angle brackets
let A4 = <one>"Hello";
let A5 = <string | number>"hello";

const addOrSub = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c == "add") return a + b;
  if (c == "concat") return "" + a + b;
  return "Hello";
};
//types is given
let myValStr: string = addOrSub(10, 10, "concat") as string;

//be careful here beauced typecriopt thinks that there us no error here but a string is getting returned here so be careful
// let myValNum: number = addOrSub(10, 10, "concat") as number;
// console.log("🚀 ~ myValNum:", typeof myValNum);

//double type casting

// 10 as "string"
10 as unknown as string;

function assertAndGetValue(input: any): string {
  if (typeof input === "string") {
    return input.toUpperCase(); // Okay now, because we asserted the type.
  } else {
    throw new Error("Input is not a string.");
  }
}

let result = assertAndGetValue("hello");
console.log("🚀 ~ result:", result);
