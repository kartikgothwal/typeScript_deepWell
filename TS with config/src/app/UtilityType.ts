//Utility Types of TS

//Partial
interface Assignment {
  name: string;
  marks: number;
  topics: string[];
  verified?: boolean;
}
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
const assignVals: Required<Assignment> = {
  name: "ABC",
  marks: 20,
  topics: ["dsaknf", "dafkn"],
  verified: true,
};
const ResultUpdate = (
  assign: Required<Assignment>,
  marks: Partial<Assignment>
): Assignment => {
  return { ...assign, ...marks };
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
const assignValsOne: Record<string, number | string | string[] | boolean> = {
  name: "ABC",
  marks: 20,
  topics: ["dsaknf", "dafkn"],
  verified: true,
};

type Stu = "Sara" | "kelly";
type StuGrade = "A" | "B" | "C" | "U";
const assignValsTwo: Record<Stu, StuGrade> = {
  Sara: "A",
  kelly: "U",
};

interface Grades {
  sub1: number;
  sub2: number;
}

const Stu2: Record<Stu, Grades> = {
  Sara: { sub1: 30, sub2: 40 },
  kelly: { sub1: 30, sub2: 40 },
};
// console.log("🚀 ~ Stu2:", Stu2);
