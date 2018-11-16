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
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;

    console.log(
      firstName + ' born in ' + yearOfBirth + ', is now allowed to drive.'
    );
  }
}

driversLicense5(true);

// es6
function driversLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = 'John';
  }
  console.log(
    firstName + ' born in ' + yearOfBirth + ', is now allowed to drive.'
  );
}

driversLicense6(true);

var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
