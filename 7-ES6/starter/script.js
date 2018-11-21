// *********************************************************
//                   LET AND CONST
// *********************************************************

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// ES6
// //const name6 = 'Jane Smith';
// let name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6)

// es5
// function driversLicense5(passedTest) {
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;

//     console.log(
//       firstName + ' born in ' + yearOfBirth + ', is now allowed to drive.'
//     );
//   }
// }

// driversLicense5(true);

// // es6
// function driversLicense6(passedTest) {
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(
//     firstName + ' born in ' + yearOfBirth + ', is now allowed to drive.'
//   );
// }

// driversLicense6(true);

// var i = 23;

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// *********************************************************
//                   BLOCKS AND IIFEs
// *********************************************************

// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }

// // console.log(a + b);
// console.log(c);

// *********************************************************
//                         STRINGS
// *********************************************************

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year) {
//   return 2018 - year;
// }

// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('ith'));
// console.log(n.includes('n Sm'));
// console.log(firstName.repeat(5));

// *********************************************************
//                     ARROW FUNCTIONS
// *********************************************************

// const years = [1990, 1956, 1982, 1937];

// // es5
// var ages5 = years.map(function(el) {
//   return 2018 - el;
// });

// console.log(ages5);

// // es6
// let ages6 = years.map(el => 2018 - el);
// console.log(ages6);

// ages6 = years.map((el, i) => `Age element ${i + 1}: ${2018 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, i) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${i + 1}: ${age}.`;
// });

// console.log(ages6);

// // es5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function() {
//       var str =
//         'This is box number ' + self.position + ' and it is ' + self.color;
//       alert(str);
//     });
//   }
// };

// box5.clickMe();

// es6
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str =
//         'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// };

// box6.clickMe();
// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str =
//         'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// };

// box66.clickMe();

function Person(name) {
  this.name = name;
}

// // es5
// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(el) {
//       return this.name + ' is friends with ' + el;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// var friends = ['bob', 'jane', 'mark'];

// new Person('John').myFriends5(friends);

// // es6
// Person.prototype.myFriends6 = function(friends) {
//   const arr = friends.map(el => `${this.name} is friends with ${el}`);
//   console.log(arr);
// };

// new Person('Bill').myFriends6(friends);

// *********************************************************
//                     DESTRUCTURING
// *********************************************************

// es5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// es6
// const [name, age] = ['Bill', 43];
// console.log(name, age);

// const obj = {
//   firstName: 'Homer',
//   lastName: 'Holms'
// };

// const { firstName, lastName } = obj;
// console.log(firstName, lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1976);
// console.log(age2, retirement);

// *********************************************************
//                     ARRAYS
// *********************************************************

// const boxes = document.querySelectorAll('.box');

// // es5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });

// // es6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => (cur.style.backgroundColor = 'dodgerblue'));

// es5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//     // break;
//   }
//   boxesArr5[i].textContent = 'I changed to blue';
// }

// es6
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed';
// }

// // es5
// var ages = [45, 17, 8, 21, 14, 33];
// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // es6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

// *********************************************************
//                     SPREAD OPERATOR
// *********************************************************

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);
// // es5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // es6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Jim', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];

// Array.from(all).forEach(cur => (cur.style.color = 'purple'));

// *********************************************************
//                     REST PARAMETERS
// *********************************************************

// // es5
// function isFullAge5() {
//   // console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments);
//   argsArr.forEach(function(cur) {
//     console.log(2018 - cur >= 18);
//   });
// }
// // isFullAge5(1990, 2015, 1995);
// // isFullAge5(1990, 2015, 1995, 2016, 1987);

// // es6
// function isFullAge6(...years) {
//   years.forEach(cur => console.log(2018 - cur >= 18));
// }

// isFullAge6(1990, 2015, 1995);
// isFullAge6(1990, 2015, 1995, 2016, 1987);

// // es5
// function isFullAge5(limit) {
//   var argsArr = Array.prototype.slice.call(arguments, 1);
//   argsArr.forEach(function(cur) {
//     console.log(2018 - cur >= limit);
//   });
// }
// // isFullAge5(21, 1990, 2015, 1995);
// // isFullAge5(21, 1990, 2015, 1995, 2016, 1987);

// // es6
// function isFullAge6(limit, ...years) {
//   years.forEach(cur => console.log(2018 - cur >= limit));
// }

// isFullAge6(16, 1990, 2015, 1995);
// isFullAge6(16, 1990, 2015, 1995, 2016, 1987);

// *********************************************************
//                     DEFAULT PARAMETERS
// *********************************************************

// es5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? (lastName = 'Smith') : lastName;
//   nationality === undefined ? (nationality = 'american') : nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// es6
// function SmithPerson(
//   firstName,
//   yearOfBirth,
//   lastName = 'Smith',
//   nationality = 'american'
// ) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// *********************************************************
//                     MAPS
// *********************************************************

// const question = new Map();
// question.set(
//   'question',
//   'What is the official name of the latest major JavaScript version?'
// );
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer');
// question.set(false, 'Wrong answer');

// console.log(question.get('question'));
// // console.log(question.size);

// if (question.has(4)) {
//   // question.delete(4);
//   // console.log('it is here');
// }

// // question.clear();
// // question.forEach((value, key) =>
// //   console.log(`This is ${key}, and it's set to ${value}`)
// // );

// for (let [key, value] of question.entries()) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')));

// *********************************************************
//                     CLASSES
// *********************************************************

// // es5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear - this.yearOfBirth;
//   console.log(age);
// };

// var john5 = new Person5('John', 1990, 'teacher');

// // es6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     const age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
//   }
//   static greeting() {
//     console.log('Hey');
//   }
// }

// const john6 = new Person6('John', 1990, 'teacher');

// Person6.greeting();

// *********************************************************
//                     SUB-CLASSES
// ********************************************************

// // es5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// };

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// // es6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     const age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAthlete6 = new Athlete6('John', 1991, 'swimmer', 3, 10);

// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();

// *********************************************************
//                     CHALLENGE
// ********************************************************

// class Park {
//   constructor(name, buildYear, numTrees, area) {
//     this.name = name;
//     this.buildYear = buildYear;
//     this.numTrees = numTrees;
//     this.area = area;
//   }
//   calcTreeDensity() {
//     console.log(
//       `${this.name} has a tree density of ${this.numTrees /
//         this.area} trees per square km`
//     );
//   }
// }

// const calcAverageParkAge = parksArr => {
//   let sum = 0;
//   const now = parseInt(new Date().getFullYear());
//   parksArr.forEach(park => {
//     sum += now - park.buildYear;
//   });
//   console.log(
//     `Our ${parksArr.length} parks have and average age of ${sum /
//       parksArr.length} years.`
//   );
// };

// class Street {
//   constructor(name, buildYear, length, size = 'normal') {
//     this.name = name;
//     this.buildYear = buildYear;
//     this.length = length;
//     this.size = size;
//   }
//   streetDesc() {
//     console.log(
//       `${this.name}, built in ${this.buildYear}, is a ${this.size} street.`
//     );
//   }
// }

// const calcAverageStreetLength = streetArr => {
//   let total = 0;
//   streetArr.forEach(cur => {
//     total += cur.length;
//   });
//   console.log(
//     `Our ${
//       streetArr.length
//     } streets have a total length of ${total} km, with an average of ${total /
//       streetArr.length} km.`
//   );
// };

// const greenPark = new Park('Green Park', 1975, 800, 100);
// const nationalPark = new Park('National Park', 1962, 1200, 400);
// const oakPark = new Park('Oak Park', 1979, 500, 200);
// parksArr = [greenPark, nationalPark, greenPark];

// const oceanAvenue = new Street('Ocean Avenue', 1999, 6, 'big');
// const evergreenStreet = new Street('Evergreen Street', 2000, 1, 'small');
// const fourthStreet = new Street('4th Street', 2015, 3);
// const sunsetBoulevard = new Street('Sunset Boulevard', 1982, 10, 'huge');
// streetArr = [oceanAvenue, evergreenStreet, fourthStreet, sunsetBoulevard];

// console.log('----PARKS REPORT----');
// calcAverageParkAge(parksArr);
// greenPark.calcTreeDensity();
// nationalPark.calcTreeDensity();
// oakPark.calcTreeDensity();
// // console.log(ages.find(cur => cur >= 18));
// const overThousand = parksArr.find(cur => cur.numTrees > 1000);
// console.log(`${overThousand.name} has more than 1000 trees.`);
// console.log('----STREETS REPORT----');
// calcAverageStreetLength(streetArr);
// oceanAvenue.streetDesc();
// evergreenStreet.streetDesc();
// fourthStreet.streetDesc();
// sunsetBoulevard.streetDesc();

// *********************************************************
//               CHALLENGE - TEACHER SOLUTION
// *********************************************************

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
];
const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8),
  new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('-----PARKS REPORT-----');
  p.forEach(el => el.treeDensity());
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have and average of ${avgAge} years.`);
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log('-----STREETS REPORT-----');
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${
      s.length
    } streets have a total length of ${totalLength} km, with and average of ${avgLength} km.`
  );
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
