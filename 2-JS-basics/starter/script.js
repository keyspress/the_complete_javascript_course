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

// Challenge 3

// const bills = [124, 48, 268];

// const tipCalc = tab => {
//   if (tab < 50) {
//     return tab * 0.2;
//   } else if (tab <= 200) {
//     return tab * 0.15;
//   } else {
//     return tab * 0.1;
//   }
// };

// console.log(bills.map(item => tipCalc(item).toFixed(2)));
// console.log(bills.map(item => (tipCalc(item) + item).toFixed(2)));

// Challenge 4

// var mark = {
//   fullName: 'Marky Mark',
//   mass: 60,
//   height: 10,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// var john = {
//   fullName: 'Johnny Johnny Yes Papa',
//   mass: 50,
//   height: 10,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(`${mark.fullName} is chunkier with a BMI of ${mark.calcBMI()}`);
// } else if (john.calcBMI() > mark.calcBMI()) {
//   console.log(`${john.fullName} is chunkier with a BMI of ${john.calcBMI()}`);
// } else {
//   console.log(`${mark.fullName} and ${john.fullName} are equally chunky`);
// }

/*****************************
 *   Loops and iteration
 */

// for (var i = 0; i < 10; i++) {
//   console.log(`loop ${i}`);
// }

// var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
// john.forEach(item => console.log(item));
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }

// loop backward my solution
// for (var i = john.length - 1; i > -1; i--) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }

/*****************************
 *   Challenge 5
 */

// ******** my solution ********

// var johnTip = {
//   bills: [124, 48, 268, 180],
//   tips: [],
//   totalBills: [],
//   tipCalc: function(bills) {
//     for (var i = 0; i < bills.length; i++) {
//       if (bills[i] < 50) {
//         this.tips.push(bills[i] * 0.2);
//         this.totalBills.push(bills[i] + bills[i] * 0.2);
//       } else if (bills[i] < 200) {
//         this.tips.push(bills[i] * 0.15);
//         this.totalBills.push(bills[i] + bills[i] * 0.15);
//       } else {
//         this.tips.push(bills[i] * 0.1);
//         this.totalBills.push(bills[i] + bills[i] * 0.1);
//       }
//     }
//   }
// };
// johnTip.tipCalc(johnTip.bills);

// console.log(johnTip.tips, johnTip.totalBills);

// var markTip = {
//   bills: [77, 375, 110, 45],
//   tips: [],
//   totalBills: [],
//   tipCalc: function(bills) {
//     for (var i = 0; i < bills.length; i++) {
//       if (bills[i] < 100) {
//         this.tips.push(bills[i] * 0.2);
//         this.totalBills.push(bills[i] + bills[i] * 0.2);
//       } else if (bills[i] < 300) {
//         this.tips.push(bills[i] * 0.1);
//         this.totalBills.push(bills[i] + bills[i] * 0.1);
//       } else {
//         this.tips.push(bills[i] * 0.25);
//         this.totalBills.push(bills[i] + bills[i] * 0.25);
//       }
//     }
//   }
// };
// markTip.tipCalc(markTip.bills);

// console.log(markTip.tips, markTip.totalBills);

// function tipAvg(array) {
//   const total = array.reduce((a, b) => a + b);
//   return total / array.length;
// }

// console.log(
//   tipAvg(johnTip.tips) > tipAvg(markTip.tips)
//     ? "John's family paid more in tips"
//     : "Mark's family paid more in tips"
// );

// ******** teacher solution ********
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.calcTips();
console.log(john);

var mark = {
  fullName: 'Mark Martin',
  bills: [77, 5, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

mark.calcTips();
console.log(mark);

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of " +
      john.average
  );
} else {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of " +
      mark.average
  );
}
