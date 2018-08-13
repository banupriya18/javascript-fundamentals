### Arrays

---

The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

##### Create an Array

```js
var fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2
```

##### Access (index into) an Array item

```js
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana
```

##### Loop over an Array

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

##### Add to the end of an Array

```js
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
```

##### Remove from the end of an Array

```js
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
```

##### Remove from the front of an Array

```js
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
```

##### Add to the front of an Array

```js
var newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"];
```

##### Find the index of an item in the Array

```js
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf("Banana");
// 1
```

##### Remove an item by index position

```js
var removedItem = fruits.splice(pos, 1); // this is how to remove an item

// ["Strawberry", "Mango"]
```

##### Copy an Array

```js
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
```

---

### Syntax to create an Array

```js
[element0, element1, ..., elementN]; // Array literal
new Array(element0, element1[, ...[, elementN]]); // Array constructor
new Array(arrayLength); // Create an empty array with a pre-defined length
```

- `elementN`
  A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.

- `arrayLength`
  If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values).

**NOTE:** For a full list of available `Array` methods, visit [MDC docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2).

---

### Array iteration

There are a few ways we can interate over elements in an array:

##### 1 - Using `for` loops

```js
// using a `for` loop
var array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  console.log(`index ${i}: ${array[i]}`);
}

// output:
// index 0: 1
// index 1: 2
// index 2: 3
// index 3: 4
```

---

##### 2 - Using `Array.prototype.forEach`

The `forEach()` method executes a provided function once for each array element

```js
var array1 = ["a", "b", "c"];

array1.forEach(function(element) {
  console.log(element);
});

// output:
// a
// b
// c
```

###### Syntax

```js
arr.forEach(function callback(currentValue, index, array) {
  //your iterator
}, thisArg);
```

###### Parameters

1. `callback` - Function to execute for each element, taking three arguments:
   - `currentValue` - The value of the current element being processed in the array.
   - `index(optional)` - The index of the current element being processed in the array.
   - `array(optional)` - The array that `forEach()` is being applied to.
2. `thisArg(optional)` - Value to use as `this` when executing `callback`

---

##### 3 - Using `Array.prototype.map`

The `map()` method creates a new array with the results of calling a provided `function` on every element in the calling `array`.

```js
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => {
  return x * 2;
});

console.log(map1);
// output: new array [2, 8, 18, 32]
```

###### Syntax

```js
var new_array = arr.map(function callback(currentValue, index, array) {
  // Return element for new_array
}, thisArg);
```

###### Parameters

1. `callback` - Function to execute for each element, taking three arguments:
   - `currentValue` - The value of the current element being processed in the array.
   - `index(optional)` - The index of the current element being processed in the array.
   - `array(optional)` - The array that `map` is being applied to.
2. `thisArg(optional)` - Value to use as `this` when executing `callback`

---

##### 4 - Using `Array.prototype.filter`

The `filter()` method creates a new `array` with all elements that pass the test implemented by the provided `function`.

```js
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => {
  return word.length > 6;
});

console.log(result);
// output: new array ["exuberant", "destruction", "present"]
```

###### Syntax

```js
var newArray = arr.filter(function callback(element, index, array), thisArg);
```

###### Parameters

1. `callback` - Function to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:
   - `currentValue` - The value of the current element being processed in the array.
   - `index(optional)` - The index of the current element being processed in the array.
   - `array(optional)` - The array that `filter()` is being applied to.
2. `thisArg(optional)` - Value to use as `this` when executing `callback`
