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

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what the color red is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', why are teenagers such idiots?');
//     };
//   } else {
//     return function(name) {
//       console.log(name + ', why are you such a lazy bum?');
//     };
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('Elmo');
// designerQuestion('Bilbo');
// interviewQuestion('eater')('Wilbur');

// ******************************************* IIFE *******************************************************

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

// game();

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// ******************************************** Closures **********************************************************

// function retirement(retirementAge) {
//   var a = ' years left until retirement.';
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// retirementUS(1976);
// retirement(77)(1976);
// var retirementGermany = retirement(65);
// var retirementGreece = retirement(13);

// retirementGermany(1990);
// retirementUS(1990);
// retirementGreece(1990);

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what the color red is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', why are teenagers such idiots?');
//     };
//   } else {
//     return function(name) {
//       console.log(name + ', why are you such a lazy bum?');
//     };
//   }
// }

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what the color red is?');
//     } else if (job === 'teacher') {
//       console.log(name + ', why are teenagers such idiots?');
//     } else {
//       console.log(name + ', why are you such a lazy bum?');
//     }
//   };
// }

// interviewQuestion('teacher')('bob');

// ****************************************** Bind, call and apply *********************************************************************

var john = {
  name: 'johnny',
  age: 400,
  job: 'duster',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm " +
          this.age +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        "Sup, Ladies and gentlemen! I'm " +
          this.name +
          ", I'm " +
          this.age +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          ' years old. ' +
          'Have a nice ' +
          timeOfDay
      );
    }
  }
};

var emily = {
  name: 'Em',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['formal', 'evening']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('night');

var emilyformal = john.presentation.bind(emily, 'formal');
emilyformal('bacon');

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

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
