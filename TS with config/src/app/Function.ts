const lsg = (message: any): void => {
  console.log("🚀 ~ lsg ~ message:", message);
};
function addFn(a: number, b: number): string {
  return `${a + b}`;
}
lsg(addFn(30, 30));

// type MathFunction = (val1: number, val2: number) => number;
interface MathFunction {
  (val1: number, val2: number): number;
}

const irk = function (val1: number, val2: number): number {
  return Math.pow(val1, val2);
};
// console.log(irk(3, 3));
const sub: MathFunction = function (a, b) {
  return a - b;
};
console.log(sub(150, 30));

//optional Parameters of a Functions
const addParamsFn = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

//default params values
const sumParamsFn = (a: number, b: number, c: number = 100): number => {
  return a + b + c;
};
console.log("values", sumParamsFn(10, 3));
