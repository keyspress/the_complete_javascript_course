/*****************************
 *   Variables and data types
 */
// var firstName = 'Johnny';
// console.log(firstName);

// var lastName = 'Jones';
// var age = 99;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job);

// var 3years = 3;

/*****************************
 *   Variable mutation and type coercion
 */

// var firstName = 'Jim';
// var age = 99;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = true;

// console.log(firstName + ' is a ' + age + ' year old ' + job + ' ' + isMarried);
// console.log(age + isMarried);

// // variable mutation
// age = 'ninety nine';
// job = 'retired';

// // alert(age);
// var lastName = prompt('what is his last name?');
// console.log(lastName);

/*****************************
 *   Basic operators
 */
// var year, yearJohn, yearMark;
// year = 2077;
// yearJohn = year - 28;
// yearMark = year - 33;
// console.log(yearJohn);
// console.log(year * 2);
// console.log(typeof year);
// console.log(typeof NaN);

var markMass = 50;
var johnMass = 60;
var markHeight = 10;
var johnHeight = 8;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markHigher = markBMI > johnBMI;

console.log(`Is Mark's BMI higher than John's? ${markHigher}`);
