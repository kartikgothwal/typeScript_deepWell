// type alias
type StringOrNum = string | number;
type StringOrNumArr = (string | number)[];

interface guit {
  name?: string;
  active: boolean;
  album: StringOrNumArr;
}
let obj: guit = {
  name: "Kartik",
  active: true,
  album: ["NP", "JP"],
};
type userId = StringOrNum;
const user1: userId = "sdfhcbdsj";

//type literals
let dave: "dave" | "Shina" | "roberto";
dave = "dave";
dave ="Shina"
console.log("🚀 ~ dave:", dave);

