/**
 * 1 - Create a Todo class using ES2015 syntax that has the following instance variables:
 *
 * id: number,
 * title: string,
 * completed: boolean
 *
 * Write 2 methods on the Todo class
 *
 * markComplete - mark the todo as true
 * markIncomplete - mark the todo as false
 *
 * Finally, if the completed property is not provided during instantiation,
 * it must default to false
 *
 * Example:
 * const todo = new Todo(1, "Go to the market", false);
 *
 * console.log(todo.title); // output: "Go to the market"
 * console.log(todo.id); // output: 1
 * console.log(todo.completed); // output: false
 *
 * todo.markComplete();
 * console.log(todo.completed); // output: true
 *
 * todo.markIncomplete();
 * console.log(todo.completed); // output: false
 */

// TODO: your code goes here
class Todo {
  constructor(id, title, completed=false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  markComplete() {
    if (!this.completed) {
      return this.completed = true;
    }
  }

  markIncomplete() {
    if (this.completed) {
        return this.completed = false;
    }
  }
}

const todo = new Todo(1, "Go to the Market", false);
console.log(todo.id);
console.log(todo.title);
console.log(todo.completed);

todo.markComplete();
console.log(todo.completed);

todo.markIncomplete();
console.log(todo.completed);

module.exports.Todo = Todo;

/**
 * 2 - Create two classes - Animal and Dog
 *
 * Dog must save 3 instance variables:
 *
 * name: string
 * breed: string
 * isay: string
 *
 * Animal must have one method `speak` that returns the value of `isay`;
 *
 * const dog = new Dog("Shadow", "german-shepherd", "bowbow");
 *
 * console.log(dog.name); // output: "Shadow"
 * cosole.log(dog.breed); // output: "german-shepherd"
 * console.log(dog.speak()); // output: "bowbow"
 */

// TODO: your code goes here
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `It can speak`;
  }
}
class Dog extends Animal {
  constructor(name, breed, isay) {
    super(name, breed, isay);
    this.breed = breed;
    this.isay = isay;
  }
  speak() {
    return this.isay;
  }
}
const dog = new Dog("Shadow", "german-shepherd", "bowbow");
console.log(dog.name);
console.log(dog.breed);
console.log(dog.speak());

module.exports.Dog = Dog;
