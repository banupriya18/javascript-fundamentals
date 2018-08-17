/**
 * In this exercise, we'll explore more powerful ways to create functions
 */

/**
 * 1 - Write a function - createUser - that has one string parameter, username.
 * It returns an object with a username property.
 *
 * var john = createUser('John');
 * console.log(john); // output: { username: 'John' }
 */

// TODO: your code goes here

function createUser(username) {
  return {
    username: username
  };
}
var john = createUser("John");
console.log(john);

module.exports.createUser = createUser;

/**
 * 2 - Write a function - createPerson - that has one string parameter, username.
 * Write a check that sees how many arguments are passed. If there is more than one argument,
 * create a property, otherArgs that is an array of the remaining arguments.
 *
 * Remeber the `arguments` local-variable available in all functions (check the Introduction.md file)
 *
 * var jane = createPerson('John', {'loves dancing': true}, [1,2,3] );
 * console.log(jane); // output: { username: 'John', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }
 */

// TODO: your code goes here
function createPerson(username, ...restArgs) {
  return {
    username: username,
    otherArgs: Array.from(arguments)
  };
}
var jane = createPerson("John", { "loves dancing": true }, [1, 2, 3]);
console.log(jane);

module.exports.createPerson = createPerson;

/**
 * 3 - Write a constructor function, AnimalCreator that returns a single animal object.
 * The constructor function has 4 parameters: username, species, tagline, and noises.
 * The animal object should have at least 5 properties: username, species, noises, tagline, and friends.
 * The values should all be strings except noises and friends, which are arrays.
 * 
 * var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
 * console.log(sheep);
      // { username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: []
      // }
 */

// TODO: your code goes here
// function AnimalCreator(username, species, tagline, noises, friends) {
//   this.username= username;
//   this.species= species;
//   this.tagline= tagline;
//   this.noises= noises;
//   this.friends= friends;
// }

// var sheep = new AnimalCreator("Cloud",
//   "sheep",
//   "You can count on me!",
//   ["baahhh", "arrgg", "chewchewchew"],[]);
// console.log(sheep);
function AnimalCreator(username, species, tagline, noises, friends) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: friends
  };
}
var sheep = AnimalCreator(
  "Cloud",
  "sheep",
  "You can count on me!",
  ["baahhh", "arrgg", "chewchewchew"],
  ["cow", "dog"]
);
console.log(sheep);
module.exports.AnimalCreator = AnimalCreator;

/**
 * 4 - Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function)
 * and adds another animal object as a friend.
 * 
 * Note that both parameters to the function are objects.
 * 
 * addFriend(sheep, cow);
 * console.log(sheep);
        // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: [{username: 'Moo', species: 'cow'...}]
        // }
 */

// TODO: your code goes here
function addFriend(username, species, tagline, noises, friends) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: friends
  };
}
var sheep = addFriend(
  "Cloud",
  "sheep",
  "You can count on me!",
  ["baahhh", "arrgg", "chewchewchew"],
  []
);
var cow = addFriend("Moo", "cow", "You can count on me", "maaa", []);
console.log(sheep);
module.exports.addFriend = addFriend;
