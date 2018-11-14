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

var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1900;
john.job = 'nothing';

var jane = Object.create(personProto, {
  name: { value: 'jane' },
  yearOfBirth: { value: 1867 },
  job: { value: 'sleeper' }
});
