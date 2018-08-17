/**
 * In this exercise, we'll create 4 functions.
 *
 * 1 - sum
 * 2 - multiply
 * 3 - fullName
 * 4 - createPerson
 */

/**
 * 1 - sum
 *
 * This function must take 2 arguments are return their sum
 * */

// TODO: your code goes here
function sum(a, b) {
  return a + b;
}
sum(2, 7);
module.exports.sum = sum;

/**
 * 2 - multiply
 *
 * This function must take 2 arguments are return their product
 * */

// TODO: your code goes here
function multiply(a, b) {
  return a * b;
}
multiply(2, 3);
module.exports.multiply = multiply;

/**
 * 3 - fullName
 *
 * This function must take 2 arguments - the firstName and lastName and return a concatenated
 * string of firstName and lastName
 * */

// TODO: your code goes here
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

fullName("Banu", "Priya");

module.exports.fullName = fullName;

/**
 * 4 - createPerson
 *
 * The work of this function is to take 4 arguments - name(string), age(number), gender(string)
 * and return an object with the properties name, age and gender with values correctly set on the objec
 * */

// TODO: your code goes here

function createPerson(name, age, gender) {
  return {
    name: name,
    age: age,
    gender:gender
  };
}

let user = createPerson("John", 30,"male");
console.log(`My name is ${user.name}.I am ${user.age} years old ${user.gender}`);

module.exports.createPerson = createPerson;
