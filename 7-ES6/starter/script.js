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

// es5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str =
        'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
};

// box5.clickMe();

// es6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};

box6.clickMe();
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

// es5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + ' is friends with ' + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ['bob', 'jane', 'mark'];

new Person('John').myFriends5(friends);

// es6
Person.prototype.myFriends6 = function(friends) {
  const arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

new Person('Bill').myFriends6(friends);
