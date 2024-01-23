"use strict";
//Utility Types of TS
// const UpdateToAssignment = (
//   assign: Assignment,
//   props: Partial<Assignment>
// ): Assignment => {
//   return { ...assign, ...props };
// };
// let assign: Assignment = {
//   name: "ABC",
//   marks: 20,
//   topics: ["dsaknf", "dafkn"],
// };
// assign = UpdateToAssignment(assign, { marks: 50 });
// console.log("🚀 ~ assign:", assign)
//Required and ReadOnly
const assignVals = {
    name: "ABC",
    marks: 20,
    topics: ["dsaknf", "dafkn"],
    verified: true,
};
const ResultUpdate = (assign, marks) => {
    return Object.assign(Object.assign({}, assign), marks);
};
//ReadOnly
// const assignValsOne: Readonly<Assignment> = {
//   name: "ABC",
//   marks: 20,
//   topics: ["dsaknf", "dafkn"],
//   verified: true,
// };
// assignValsOne.name = "BCA"
console.log(ResultUpdate(assignVals, { marks: 50 }));
//Record
const assignValsOne = {
    name: "ABC",
    marks: 20,
    topics: ["dsaknf", "dafkn"],
    verified: true,
};
const assignValsTwo = {
    Sara: "A",
    kelly: "U",
};
const Stu2 = {
    Sara: { sub1: 30, sub2: 40 },
    kelly: { sub1: 30, sub2: 40 },
};
// console.log("🚀 ~ Stu2:", Stu2);
