### Functions

---

Functions are one of the fundamental building blocks in JavaScript. A `function` is a
JavaScript procedure — a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

##### Function declarations

A function declaration (also called a **function definition**, or **function statement**)
consists of the `function` keyword, followed by:

- The `name` of the function.
- A list of `parameters` to the `function`, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, `{ }`.

For example, the following code defines a simple function named `square`:

```js
function square(number) {
  return number * number;
}
```

The function `square` takes one parameter, called `number`. The function consists of one
statement that says to return the parameter of the function (that is, `number`) multiplied by
itself. The statement `return` specifies the value returned by the function.

```js
return number * number;
```

##### Function expressions

While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name. For example, the function `square` could have been defined as:

```js
var square = function(number) {
  return number * number;
};

var x = square(4); // x gets the value 16
```

However, a name can be provided with a `function` expression and can be used inside the
`function` to refer to itself, or in a debugger to identify the `function` in stack traces:

```js
var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

In JavaScript, a `function` can be defined based on a condition. For example, the
following `function` definition defines `myFunc` only if `num` equals `0`:

```js
var myFunc;

if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = "Toyota";
  };
}
```

##### Calling functions

Defining a function does not execute it. Defining the function simply names the
function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters.
For example, if you define the function `square`, you could call it as follows:

```js
square(5);
```

The preceding statement calls the function with an argument of 5. The function executes its
statements and returns the value 25.

Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:

```js
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}
```

The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.

**Note:**
This works only when defining the function using the above syntax (i.e. `function funcNam (){}`). The code below will not work. That means, function hoisting only works with **function
declaration** and not with **function expression**.

```js
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) {
  return n * n;
};
```

##### Arguments

The `arguments` object is an Array-like object corresponding to the arguments passed to a function.

The `arguments` object is a local variable available within all **(non-arrow)** functions. You can refer to a function's `arguments` within the function by using the `arguments` object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0. For example, if a function is passed three arguments, you can refer to them as follows:

```js
arguments[0];
arguments[1];
arguments[2];
```

Let's look at another example:

```js
function square() {
  console.log(arguments);
}

// Calling square with no arguments
square(); // output: [callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Calling square with 3 arguments
square(1, 2, 3); // output: [0: 1, 1: 2, 0: 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

This is interesting because we can write a function `sum` that can take any number of integers and our function can add them all up. Let's look at how we can do this:

```js
function sum() {
  let numbers = Array.from(arguments); // Array.from creates a new array

  console.log(numbers);
}

sum(1, 2, 3, 4, 5); // output: [1,2,3,4,5]

// Let's use this technique to add all numbers
function sum() {
  let numbers = Array.from(arguments);
  let sum = 0;

  numbers.forEach(number => {
    // First iteration: sum = 0, number = 1
    // Second iteration: sum = 1, number = 2
    // Third iteration: sum = 3, number = 3
    sum = sum + number;
  });

  return sum;
}

let result = sum(1, 2, 3);
console.log(result); // output: 6
```
