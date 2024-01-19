const imgEle = document.querySelector("#img") as HTMLImageElement;
const imgEle2 = <HTMLImageElement>document.querySelector("#img");

const paraEle = document.getElementById("#para") as HTMLElement;

// const ELE1 = document.getElementsByClassName(".box")
const ELE1 = document.querySelectorAll(".box");

imgEle.src = "http://www.google.com";
// paraEle.src="http://www.google.com"


//  const imgElement = document.getElementById("#img") as HTMLImageElement;
const imgElement = <HTMLImageElement>document.getElementById("#img");
imgElement.src = "http://www.google.com";

//not null assertion
const paraElement = document.querySelector("#para")! as HTMLImageElement;

paraElement.src = "http://www.google.com";
