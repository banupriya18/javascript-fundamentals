### Classes

---

#### Inroduction

JavaScript is a prototype-based language which contains no class statement, such as is found in C++ or Java. This is sometimes confusing for programmers accustomed to languages with a class statement. Instead, JavaScript uses functions as classes. Defining a class is as easy as defining a function. In the example below we define a new class called `Person`.

```js
function Person() {}
```

To create a new instance of an object obj we use the statement new obj, assigning the result (which is of type obj) to a variable to access it later.

In the example below we define a class named Person and we create two instances (person1 and person2).

```js
var person1 = new Person();
var person2 = new Person();
```

---

#### Terminology

| Term          | Description                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| Class         | Defines the characteristics of the Object.                                                                         |
| Object        | An Instance of a Class.                                                                                            |
| Property      | An Object characteristic, such as color.                                                                           |
| Method        | An Object capability, such as walk.                                                                                |
| Constructor   | A method called at the moment of instantiation.                                                                    |
| Inheritance   | A Class can inherit characteristics from another Class.                                                            |
| Encapsulation | A Class defines only the characteristics of the Object, a method defines only how the method executes.             |
| Abstraction   | The conjunction of complex inheritance, methods, properties of an Object must be able to simulate a reality model. |
| Polymorphism  | Different Classes might define the same method or property.                                                        |

---

#### Constructor

The `constructor` is called at the moment of `instantiation` (the moment when the object instance is created). The constructor is a `method` of the `class`. In JavaScript, the `function` serves as the `constructor` of the `object`; therefore, there is no need to explicitly define a `constructor` method. Every action declared in the class gets executed at the time of instantiation.

The `constructor` is used to set the object's `properties` or to call `methods` to prepare the `object` for use. Adding `class methods` and their definitions occurs using a different syntax described later in this article.

In the example below, the `constructor` of the class Person displays an alert when a Person is instantiated.

```js
function Person() {
  console.log("Person instantiated");
}

var person1 = new Person();
var person2 = new Person();
```

---

#### The Property (object attribute)

Properties are `variables` contained in the `class`; every `instance` of the `object` has those properties. Properties should be set in the `prototype property` of the `class` (function) so that `inheritance` works correctly.

Working with properties from within the `class` is done by the keyword `this`, which refers to the `current object`. Accessing (reading or writing) a `property` outside of the `class` is done with the syntax: `InstanceName.Property`; this is the same syntax used by C++, Java, and a number of other languages. (Inside the class the syntax `this.Property` is used to `get` or `set` the property's value.)

In the example below we define the `gender` `property` for the `Person` class and we define it at instantiation.

```js
function Person(gender) {
  this.gender = gender;
  console.log("Person instantiated");
}

var person1 = new Person("Male");
var person2 = new Person("Female");

//display the person1 gender
console.log("person1 is a " + person1.gender); // person1 is a Male
```

---

#### The methods

Methods follow the same logic as properties; the difference is that they are `functions` and they are defined as `functions`. Calling a `method` is similar to accessing a `property`, but you add `()` at the end of the `method` name, possibly with `arguments`. To define a `method`, assign a `function` to a `named property` of the class's `prototype property`; the name that the `function` is assigned to is the `name` that the `method` is called by on the `object`.

In the example below we define and use the `method sayHello()` for the `Person` class.

```js
function Person(gender) {
  this.gender = gender;
  console.log("Person instantiated");
}

Person.prototype.sayHello = function() {
  console.log("hello");
};

var person1 = new Person("Male");
var person2 = new Person("Female");

// call the Person sayHello method.
person1.sayHello(); // hello
```

In JavaScript methods are regular `function` objects that are bound to a `class/object` as a `property` which means they can be `invoked` "out of the context". Consider the following example code:

```js
function Person(gender) {
  this.gender = gender;
}

Person.prototype.sayGender = function() {
  console.log(this.gender);
};

var person1 = new Person("Male");
var genderTeller = person1.sayGender;

person1.sayGender(); // alerts 'Male'
genderTeller(); // alerts undefined
console.log(genderTeller === person1.sayGender); // alerts true
console.log(genderTeller === Person.prototype.sayGender); // alerts true
```

This example demonstrates many concepts at once. It shows that there are no "per-object methods" in JavaScript since all references to the `method` point to the exact same `function`,the one we have defined in the first place on the `prototype`. JavaScript `binds` the current "object context" to the special `this` variable when a `function` is invoked as a `method`(or property to be exact) of an `object`. This is equal to calling the function object's "call" method as follows:

```js
genderTeller.call(person1); //alerts 'Male'
```

---

#### Inheritance

Inheritance is a way to create a `class` as a specialized version of one or more classes (JavaScript only supports single class `inheritance`). The specialized class is commonly called the `child`, and the other class is commonly called the `parent`. In JavaScript you do this by assigning an `instance` of the `parent` class to the `child` class, and then specializing it.

```js
// define the Person Class
function Person() {}

Person.prototype.walk = function() {
  console.log("I am walking!");
};
Person.prototype.sayHello = function() {
  console.log("hello");
};
```

```js
// define the Student class
function Student() {
  // Call the parent constructor
  Person.call(this);
}
```

```js
// inherit Person
Student.prototype = new Person();

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;

// replace the sayHello method
Student.prototype.sayHello = function() {
  console.log("hi, I am a student");
};

// add sayGoodBye method
Student.prototype.sayGoodBye = function() {
  console.log("goodBye");
};

var student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGoodBye();

// check inheritance
console.log(student1 instanceof Person); // true
console.log(student1 instanceof Student); // true
```

---

#### Encapsulation

In the previous example, `Student` does not need to know how the `Person` class's `walk()` method is implemented, but still can use that method; the `Student` class doesn't need to explicitly define that `method` unless we want to change it. This is called `encapsulation`, by which every class `inherits` the methods of its `parent` and only needs to define things it wishes to change.

---

#### Abstraction

Abstraction is a mechanism that permits modeling the current part of the working problem. This can be achieved by `inheritance` (specialization), or `composition`. JavaScript achieves specialization by `inheritance`, and `composition` by letting instances of classes be the values of attributes of other objects.

The JavaScript `Function` class inherits from the `Object` class (this demonstrates specialization of the model). and the `Function.prototype` property is an instance of `Object` (this demonstrates composition)

```js
var foo = function() {};

console.log("foo is a Function: " + (foo instanceof Function)); // foo is a Function: true
console.log("foo.prototype is an Object: " + (foo.prototype instanceof Object)); // foo.prototype is an Object: true
```

---

### ES2015 (or ES6) Classes

The ES2015 specification adds the Java class syntax to the JavaScript language. Here's how we can define a class is ES2015

```js
class Person {
  constructor() {
    //
  }
}
```

The syntax for inheritance has also been modified to support the Java syntax.

```js
class Person {
  walk() {
    console.log("I am walking");
  }

  sayHello() {
    console.log("Hello");
  }
}

class Student extends Person {
  sayHello() {
    console.log("Hello, I'm a student");
  }

  sayGoodbye() {
    console.log("Goodbye!");
  }
}

var john = new Student();
john.sayHello();
john.walk();
john.sayGoodbye();

// check inheritance
console.log(john instanceof Person); // true
console.log(john instanceof Student); // true
```

All `properties` and `methods` that exist on the parent `Person` class can be accessed by the child `Student` class using the `this` keyword. In the example below, we will store the name property on the `Person` class. When we create an instance of the `Student` class, we **MUST** call the parent `Person` class constructor with the `name` property.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("I am walking");
  }

  sayHello() {
    console.log("Hello");
  }
}

class Student extends Person {
  constructor(name) {
    super(name); // call Person constructor, passing the name
  }

  sayHello() {
    // We can now access the name property from the parent using the `this` keyword
    console.log("Hello, I'm a student and my name is " + this.name);
  }

  sayGoodbye() {
    console.log("Goodbye!");
  }
}

const john = new Student("John");
console.log(john.name); // output: John

john.sayHello(); // output: "Hello, I'm a student and my name is John"
```
