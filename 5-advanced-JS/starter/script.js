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

var a = 23;
var b = a;

a = 46;
console.log(a, b);

var obj1 = {
  name: 'john',
  age: 26
};

var obj2 = obj1;

obj1.age = 99;

console.log(obj1.age);
console.log(obj2.age);

var age = 24;
var obj = {
  name: 'Jim Bob',
  city: 'Whoville'
};

function change(a, b) {
  a = 30;
  b.city = 'Atlantis';
}

change(age, obj);

console.log(age);
console.log(obj.city);
