### Objects

---

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

```js
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object.

Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. Properties of JavaScript objects can be accessed using two methods:

##### Method 1 - Using "dot" notation

```js
console.log(myCar.make); // outputs "Ford"
myCar.make = "Jaguar"; // set property value using dot notation
```

##### Method 2 - Using bracket notation

```js
console.log(myCar["model"]); // outputs "Mustang"
myCar["model"] = "jaguar xf"; // set property value using bracket notation
```

Unassigned properties of an object are `undefined` (and not `null`)

`myCar.color; // undefined`
