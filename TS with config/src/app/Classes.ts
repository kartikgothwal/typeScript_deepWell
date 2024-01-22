class Coder {
  public readonly name: string;
  public music: string;
  private age: number;
  protected lang: string;
  secondLang!: string;
  constructor(
    name: string,
    music: string,
    age: number,
    lang: string = "JAVASCRIPT"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public printAge() {
    console.log(`${this.name}, hey, my age is ${this.age}`);
  }
}
//access specifier are also known as Visibiliby modifier in typeScript

// const CoderOne = new Coder("Steve jobs", "Lofi", 40, "C++");

// const CoderTwo = new Coder("Elon Musk", "ROck", 54);
//  console.log("🚀 ~ CoderTwo:", CoderTwo)

class Webdev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    lang: string
  ) {
    super(name, music, age, lang);
    this.computer = computer;
  }
  public printLang() {
    console.log(`my lang is ${this.lang}`);
  }
}
const WebdevOne = new Webdev("WindowsOS", "JFK", "LOFI", 20, "Rust");
// console.log("🚀 ~ WebdevOne:", WebdevOne.printLang());

//////////////////////////////Implementing Interface//////////////////////////////////;
interface Musician {
  name: string;
  instrument: string;
  printName(action: string): string;
}

class Singer implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  public printName(action: string) {
    return `${this.name} and I ${action} ${this.instrument} `;
  }
}
const SingerOne = new Singer("Sonu Nigam", "Guitar");
// console.log("🚀 ~ SingerOne:", SingerOne.printName("play"));

////////////////////////Static Keyword////////////////////////;
class Peeps {
  public name: string;
  static count: number = 0;
  constructor(name: string) {
    this.name = name;
    ++Peeps.count;
  }
  public show() {
    return `My name is ${this.name}`;
  }
}
const PeepsOne = new Peeps("Shiva");
const PeepsTwo = new Peeps("rajni ");
const PeepsThree = new Peeps("Shiva");
console.log(Peeps.count);

///////////////////setter and getter function//////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((ele) => typeof ele == "string")) {
      this.dataState = value;
    } else throw new Error("Params are not string");
  }
  public get data(): string[] {
    return this.dataState;
  }
}
// const myBand = new Bands();
// myBand.data= ["Good", "Morning"]
// console.log("🚀 ~ myBand.data:", myBand.data)
const myBand = new Bands();
myBand.data= ["monday", "saturday"]
console.log("🚀 ~ myBand.data:", myBand.data)