/**
 * 1 - Creating an array from a string.
 *
 * The `split` method on String allows you to create an array
 * from a string by specifying a delimitter.
 *
 * Syntax: String.split(delimitter)
 * delimitter is the character that is used to identify where to split the string.
 *
 * Ex: 'john,jane,michael'.split(',') // output: ['john', 'jane', 'michael']
 * The delimitter here is the comma(',') character
 *
 * Exercise - Write a function - splitString - that takes a "comma-delimitted" string and returns
 * an array of the values.
 *
 * splitString("shadow,laika")
 * // output: ['shadow', 'laika']
 */

// TODO: your code goes here.
function splitString(arr) {
  var splitWords = arr.split(",");
  return splitWords;
}
splitString("shadow,laika");

module.exports.splitString = splitString;

/**
 * 2 - Custom delimitter
 *
 * Write a function - splitStringCustom - that takes a string as it's first parameter
 * and a custom delimitter as the second parameter.
 *
 * splitStringCustom("car:bike:auto", ":")
 * // output: ['car', 'bike', 'auto']
 */

// TODO: your code goes here
function splitStringCustom(arg1, arg2) {
  var remColon = arg1.split(arg2);
  return remColon;
}
splitStringCustom("car:bike:auto", ":");

module.exports.splitStringCustom = splitStringCustom;

/**
 * 3 - Creating a string from an array
 *
 * We can do the inverse of the previous operation. Instead of creating an
 * array from a string, we'll now create a string from an array.
 *
 * The `join` method on Array allows us to create a string
 * from a list of array items.
 *
 * Syntax: [].join(delimitter)
 * delimitter is the character that is used to join the elements of the array
 *
 * Ex: ['john', 'jane', 'michael'].join(',') // output: 'john,jane,michael'
 * The delimitter here is the comma(',') character
 *
 * Exercise: Write a function - joinArray - that takes an array and returns
 * a string of it's elements delimitted by a comma(',')
 *
 * joinArray(['john','jane']) // output: "john,jane"
 */

// TODO: your code goes here

function joinArray(arrays) {
  var joinComma = arrays.join(",");
  return joinComma;
}
joinArray(["john", "jane", "michael"]);

module.exports.joinArray = joinArray;

/**
 * 4 - Custom delimitter
 *
 * Write a function - joinArrayCustom - that takes an array as it's first parameter
 * and a custom delimitter as the second parameter.
 *
 * joinArrayCustom(['car', 'bike', 'auto'], ":")
 * // output: "car:bike:auto";
 */

// TODO: your code goes here
function joinArrayCustom(array1, array2) {
  var joinColon = array1.join(array2);
  return joinColon;
}
joinArrayCustom(["car", "bike", "auto"], ":");

module.exports.joinArrayCustom = joinArrayCustom;

/**
 * 5 - Add an item to the beginning of an array
 *
 * Write a function - setFirstItem - that takes an array as
 * the first parameter and a string as the second parameter
 * and returs the array with the string placed at the beginning
 * of the array.
 *
 * NOTE: check the Introduction.md file to see which method to use
 *
 * setFirstItem(['foo', 'bar'], 'baz') // output: ['baz', 'foo', 'bar']
 */

// TODO: your code goes here

function setFirstItem(arrFirst, arrSec) {
  var addItemFront = arrFirst.unshift(arrSec);
  return arrFirst;
}
setFirstItem(["foo", "bar"], "baz");

module.exports.setFirstItem = setFirstItem;

/**
 * 6 - Remove an item from the end of an array
 *
 * Write a fucntion - removeLastItem - that takes an array,
 * removes the last item from the array and return the
 * modified array.
 *
 * removeLastItem(['foo','bar','baz']) // ['foo', 'bar']
 */

// TODO: your code goes here

function removeLastItem(arr) {
  var remItem = arr.pop();
  return arr;
}
removeLastItem(["foo", "bar", "baz"]);

module.exports.removeLastItem = removeLastItem;
