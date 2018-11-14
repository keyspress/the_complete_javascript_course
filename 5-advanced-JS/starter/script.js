// function constructor

// var john = {
//   name: 'johnny',
//   yearOfBirth: 1900,
//   job: 'fertilizer'
// };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'smithy';

// var john = new Person('johnny', 1900, 'fertilizer');
// var jane = new Person('jane', 1976, 'reader');
// var mark = new Person('marky', 1989, 'sleeper');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);

// ********************************* Object.create ***************************************************

// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = 'john';
// john.yearOfBirth = 1900;
// john.job = 'nothing';

// var jane = Object.create(personProto, {
//   name: { value: 'jane' },
//   yearOfBirth: { value: 1867 },
//   job: { value: 'sleeper' }
// });

// ************************** primitives vs objects ***************************************************

// var a = 23;
// var b = a;

// a = 46;
// console.log(a, b);

// var obj1 = {
//   name: 'john',
//   age: 26
// };

// var obj2 = obj1;

// obj1.age = 99;

// console.log(obj1.age);
// console.log(obj2.age);

// var age = 24;
// var obj = {
//   name: 'Jim Bob',
//   city: 'Whoville'
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'Atlantis';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// *************************** functions ***********************************************************

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
