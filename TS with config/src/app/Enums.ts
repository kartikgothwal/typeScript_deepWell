//Enums
enum Days {
  monday = 10,
  tuesday,
  webnesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let test: Days;

test = Days.monday;

function random(day: Days) {
  console.log(day);
}
random(Days.saturday);
