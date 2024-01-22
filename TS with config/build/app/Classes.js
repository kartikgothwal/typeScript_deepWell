"use strict";
class Coder {
    constructor(name, music, age, lang = "JAVASCRIPT") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    printAge() {
        console.log(`${this.name}, hey, my age is ${this.age}`);
    }
}
//access specifier are also known as Visibiliby modifier in typeScript
// const CoderOne = new Coder("Steve jobs", "Lofi", 40, "C++");
// const CoderTwo = new Coder("Elon Musk", "ROck", 54);
//  console.log("🚀 ~ CoderTwo:", CoderTwo)
class Webdev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    printLang() {
        console.log(`my lang is ${this.lang}`);
    }
}
const WebdevOne = new Webdev("WindowsOS", "JFK", "LOFI", 20, "Rust");
class Singer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    printName(action) {
        return `${this.name} and I ${action} ${this.instrument} `;
    }
}
const SingerOne = new Singer("Sonu Nigam", "Guitar");
// console.log("🚀 ~ SingerOne:", SingerOne.printName("play"));
////////////////////////Static Keyword////////////////////////;
class Peeps {
    constructor(name) {
        this.name = name;
        ++Peeps.count;
    }
    show() {
        return `My name is ${this.name}`;
    }
}
Peeps.count = 0;
const PeepsOne = new Peeps("Shiva");
const PeepsTwo = new Peeps("rajni ");
const PeepsThree = new Peeps("Shiva");
console.log(Peeps.count);
///////////////////setter and getter function//////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    set data(value) {
        if (Array.isArray(value) && value.every((ele) => typeof ele == "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Params are not string");
    }
    get data() {
        return this.dataState;
    }
}
// const myBand = new Bands();
// myBand.data= ["Good", "Morning"]
// console.log("🚀 ~ myBand.data:", myBand.data)
const myBand = new Bands();
myBand.data = ["monday", "saturday"];
console.log("🚀 ~ myBand.data:", myBand.data);
