import { inventors, people, transport } from "./data.mjs";

console.info("Initial Data");
console.table(inventors);
console.table(people);
console.table(transport);
console.log("---------------------------------------------------------");

console.info(
  "1. Filter the list of inventors for those who were born in the 1500's"
);
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);
console.log("---------------------------------------------------------");

console.info("2. Give us an array of the inventor first and last names");
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);
console.log("---------------------------------------------------------");

console.info("3. Sort the inventors by birthdate, oldest to youngest");
const ordered = inventors.sort((a, b) => a.year > b.year);
console.table(ordered);
console.log("---------------------------------------------------------");

console.info("4. How many years did all the inventors live?");
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);
console.log("---------------------------------------------------------");

console.info("5. Sort the inventors by years lived");
const oldest = inventors.sort((a, b) => a.passed - a.year > b.passed - b.year);
console.table(oldest);

console.log("---------------------------------------------------------");

// console.info("6. create a list of Boulevards in Paris that contain 'de' anywhere in the name");
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// console.log("---------------------------------------------------------");

console.info("7. Sort the people alphabetically by last name");
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast;
});
console.log(alpha);
console.log("---------------------------------------------------------");

console.info("8. Sum up the instances of each of these");
const transportation = transport.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
