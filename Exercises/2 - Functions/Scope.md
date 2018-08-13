#### Function Scope

Variables defined inside a `function` cannot be accessed from anywhere outside the `function`, because the variable is defined only in the scope of the `function`.

However, a `function` can access all variables and `functions` defined inside the scope in which it is defined. In other words, a `function` defined in the global scope can access all variables defined in the global scope. A `function` defined inside another `function` can also access all variables defined in its parent `function` and any other variable to which the parent `function` has access.

```js
// The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"
```

`Scope` is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

##### Why Scope ?

So, what's the point in limiting the visibility of variables and not having everything available everywhere in your code? One advantage is that scope provides some level of security to your code. One common principle of computer security is that users should only have access to the stuff they need at a time.

Think of computer administrators. As they have a lot of control over the company's systems, it might seem okay to grant full access user account to them. Suppose you have a company with three administrators, all of them having full access to the systems and everything is working smooth. But suddenly something bad happens and one of your system gets infected with a malicious virus. Now you don't know whose mistake that was? You realize that you should them basic user accounts and only grant full access privileges when needed. This will help you track changes and keep an account of who did what. This is called The Principle of Least Access. Seems intuitive? This principle is also applied to programming language designs, where it is called scope in most programming languages including JavaScript which we are going to study next.

##### Global scope

When you start writing JavaScript in a document, you are already in the Global scope. There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it's defined outside of a function.

```js
// the scope is by default global
var name = "John";
```

Variables inside the Global scope can be accessed and altered in any other scope.

```js
var name = "John";

console.log(name); // logs 'John'

function logName() {
  console.log(name); // 'name' is accessible here and everywhere else
}

logName(); // logs 'John'
```

##### Local scope

Variables defined inside a function are in the local scope. And they have a different scope for every call of that function.

```js
// Global Scope
function someFunction() {
  // Local Scope #1
  function someOtherFunction() {
    // Local Scope #2
  }
}

// Global Scope
function anotherFunction() {
  // Local Scope #3
}
// Global Scope
```

Block statements like `if` and `switch` conditions or `for` and `while` loops, unlike `functions`, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in.

```js
if (true) {
  // this 'if' conditional block doesn't create a new scope
  var name = "John"; // name is still in the global scope
}

console.log(name); // logs 'John'
```

The above code is seen by the JavaScript engine like so:

```js
var name = undefined;

if (true) {
  // this 'if' conditional block doesn't create a new scope
  name = "John"; // name is still in the global scope
}

console.log(name); // logs 'John'
```

Contrary to the `var` keyword, the `let` and `const` keywords support the declaration of local scope inside block statements.

```js
if (true) {
  // this 'if' conditional block doesn't create a scope

  // name is in the global scope because of the 'var' keyword
  var name = "John";
  // likes is in the local scope because of the 'let' keyword
  let likes = "Coding";
  // skills is in the local scope because of the 'const' keyword
  const skills = "JavaScript and PHP";
}

console.log(name); // logs 'John'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined
```
