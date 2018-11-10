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

// var markMass = 50;
// var johnMass = 60;
// var markHeight = 10;
// var johnHeight = 8;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var markHigher = markBMI > johnBMI;

// console.log(`Is Mark's BMI higher than John's? ${markHigher}`);

/*****************************
 *   The Ternary Operator and Switch Statements
 */

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log('drink up') : console.log('watch out for the po po!');

// var drink = age >= 18 ? 'beer' : 'milk I guess...';

// console.log(`${firstName} can drink ${drink}`);

// var job = 'musician';

// switch (job) {
//   case 'bar tender':
//     console.log(`${firstName} listens to drunk people complain`);
//     break;
//   case 'teacher':
//     console.log(
//       `${firstName} has to deal with bratty idiots and sometimes teach their children`
//     );
//     break;
//   default:
//     console.log(`${firstName} is basically a bum`);
// }

/*****************************
 *   Truthy and Falsy
 */
// falsy: undefined, null, 0, '', NaN

// var height;
// if (height) {
//   console.log('variable is defined');
// } else {
//   console.log('not defined');
// }

/*****************************
 *   CODE CHALLENGE 2
 */

// johnTeamScores = [116, 9499, 123];
// mikeTeamScores = [116, 9499, 123];
// maryTeamScores = [97, 13, 105];

// const calcAverage = scores => {
//   const sum = scores.reduce((a, b) => a + b, 0);
//   return sum / scores.length;
// };

// johnTeamAvg = calcAverage(johnTeamScores);
// mikeTeamAvg = calcAverage(mikeTeamScores);
// maryTeamAvg = calcAverage(maryTeamScores);

// if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
//   console.log('John has the best team');
// } else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
//   console.log('Mike has the best team');
// } else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
//   console.log('Mary has the best team');
// } else {
//   console.log('No team is best so they are all losers...');
// }

const bills = [124, 48, 268];

const tipCalc = tab => {
  if (tab < 50) {
    return tab * 0.2;
  } else if (tab <= 200) {
    return tab * 0.15;
  } else {
    return tab * 0.1;
  }
};

console.log(bills.map(item => tipCalc(item).toFixed(2)));
console.log(bills.map(item => (tipCalc(item) + item).toFixed(2)));
