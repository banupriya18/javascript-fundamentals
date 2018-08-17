/**
 * 1 - Write a function - arraySum - that takes an array of numbers
 * as it's only parameter and returns the sum of all the numbers
 * in the array.
 *
 * Note: Use a `for` loop.
 *
 * arraySum([1, 2, 3]) // output: 6
 */

// TODO: your code goes here

function arraySum(arrays) {
  var sum = 0;
  for (var i = 0; i < arrays.length; i++) {
    sum += arrays[i];
  }
  return sum;
}
arraySum([1, 2, 3]);

module.exports.arraySum = arraySum;

/**
 * 2 - Write a function - onlyEvenNumbers - that takes an array of numbers
 * as it's only parameter and returns an array of only the even numbers.
 *
 * HINT: You must use the modulo operator
 *
 * onlyEventNumbers([1, 2, 3, 4, 5, 6]) // output [2, 4, 6]
 */

// TODO: your code goes here

function onlyEvenNumbers(arr) {
  var evenArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}
onlyEvenNumbers([1, 2, 3, 4, 5, 6]);
module.exports.onlyEvenNumbers = onlyEvenNumbers;

/**
 * 3 - Write a function - getSpecies - that takes an array of animal objects (from the previous exercise)
 * and returns an array of objects - each object only containing the species property
 * 
 * animals = [{
     username: 'Cloud',
     species: 'sheep',
     tagline: 'You can count on me!',
     noises: ['baahhh', 'arrgg', 'chewchewchew'],
     friends: []
  }];
 * 
 * getSpecies(animals) // output: [{ species: 'sheep' }]
 */

// TODO: your code goes here

var animals = [
  {
    username: "Cloud",
    species: "sheep",
    tagline: "You can count on me!",
    noises: ["baahhh", "arrgg", "chewchewchew"],
    friends: []
  }
];
function getSpecies(animals) {
  const arg = animals.map(function(item) {
    return { species: item.species };
  });
  return arg;
}
getSpecies(animals);

module.exports.getSpecies = getSpecies;

/**
 * 4 - Write a function - getMaleUsers - that takes an array of users
 * and returns only users that are males
 *
 * users = [
 *   {
 *     username: 'john',
 *     gender: 'male'
 *   },
 *   {
 *     username: 'jane',
 *     gender: 'female'
 *   }
 * ];
 *
 * getMaleUsers(users) // output: [{ username: 'john', gender: 'male' }]
 */

// TODO: your code goes here

function getMaleUsers(users) {
  const result = users.filter(user => {
    return user.gender === "male";
  });
  return result;
}
getMaleUsers([
  {
    username: "john",
    gender: "male"
  },
  {
    username: "jane",
    gender: "female"
  }
]);
module.exports.getMaleUsers = getMaleUsers;

/**
 * 5 - Write a function - multiply - that takes an array on numbers
 * as it's only parameter and returns an array with each number
 * inside the original array multiplied by 2
 *
 * multiply([1, 2, 3]) // output: [2, 4, 6]
 */

// TODO: your code goes here

function multiply(arrays) {
  var newArray = [];
  for (var i = 0; i < arrays.length; i++) {
    var arr = arrays[i] * 2;
    newArray.push(arr);
  }
  return newArray;
}
multiply([1, 2, 3]);

module.exports.multiply = multiply;
