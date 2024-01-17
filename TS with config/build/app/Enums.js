"use strict";
//Enums
var Days;
(function (Days) {
    Days[Days["monday"] = 10] = "monday";
    Days[Days["tuesday"] = 11] = "tuesday";
    Days[Days["webnesday"] = 12] = "webnesday";
    Days[Days["thursday"] = 13] = "thursday";
    Days[Days["friday"] = 14] = "friday";
    Days[Days["saturday"] = 15] = "saturday";
    Days[Days["sunday"] = 16] = "sunday";
})(Days || (Days = {}));
let test;
test = Days.monday;
function random(day) {
    console.log(day);
}
random(Days.saturday);
