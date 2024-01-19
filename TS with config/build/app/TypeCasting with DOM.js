"use strict";
const imgEle = document.querySelector("#img");
const imgEle2 = document.querySelector("#img");
const paraEle = document.getElementById("#para");
// const ELE1 = document.getElementsByClassName(".box")
const ELE1 = document.querySelectorAll(".box");
imgEle.src = "http://www.google.com";
// paraEle.src="http://www.google.com"
//  const imgElement = document.getElementById("#img") as HTMLImageElement;
const imgElement = document.getElementById("#img");
imgElement.src = "http://www.google.com";
//not null assertion
const paraElement = document.querySelector("#para");
paraElement.src = "http://www.google.com";
