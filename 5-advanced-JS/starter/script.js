// function constructor

var john = {
  name: 'johnny',
  yearOfBirth: 1900,
  job: 'fertilizer'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'smithy';

var john = new Person('johnny', 1900, 'fertilizer');
var jane = new Person('jane', 1976, 'reader');
var mark = new Person('marky', 1989, 'sleeper');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
