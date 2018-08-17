/**
 * 1 - Using the function syntax, create a User class
 * that has one instance variable (property) - name
 */

// TODO: your code goes here
class User {
  constructor(name) {
    this.name = name;
  }
}
module.exports.User = User;

/**
 * 2 - Create a Human class, using the function syntax
 * that has one instance method - sayHi.
 *
 * The instance method, should return the string "Hi";
 */

// TODO: your code goes here
class Human {
    constructor(name){
        this.name=name;
    }
  sayHi() {
    return "Hi";
  }
}
var john = new Human("John");
john.sayHi();

module.exports.Human = Human;

/**
 * 3 - Create a Person class that inherits from Human.
 * The Person class must have the following instance variables:
 *
 * name: string
 * gender: string
 * age: number
 *
 * const person = new Person("John", "male", 30);
 * console.log(person.name) // output: "John"
 * console.log(person.age) // output: 30
 * console.log(person.gender) // output: "male"
 * console.log(person.sayHi()) // output: "Hi"
 */

// TODO: your code goes here
class Person extends Human {
  constructor(name, gender, age) {
    super(name);
    this.gender = gender;
    this.age = age;
  }
  //super(name);
}
var person = new Person("John", "male", 30);
console.log(person.name);
console.log(person.gender);
console.log(person.age);
console.log(person.sayHi());

module.exports.Person = Person;
