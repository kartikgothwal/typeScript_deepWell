"use strict";
//generic is used for resuable components
// function Store(arg:string):string{
//     return arg
// }
// function Store(arg:any):any{
//     return parseInt(arg)
// }
// console.log(Store("10"))
//this is generic
// function Store<Type>(arg: Type): Type {
//   return arg;
// }
//with Array ;
// function Store<Type>(arg: Type[]): Type {
//   return arg[3];
// }
// function Store<Type>(arg: Array<Type>): Type {
//   return arg[3];
// }
// function Store<Type>(arg: Array<Type>): number {
//   return 10;
// }
//with Arrow function
// const Store = <Type>(product: Type[]): Type => {
//   return product[2];
// // };
// const Store = <T>(product: T[]): T => {
//   return product[2];
// };
// console.log(Store([10, 30, 40, 50]));
const Store = (product, input2) => {
    return [product[2], input2];
};
console.log(Store([10, 30, 40, 50], 30));
