const { Todo, Dog } = require("../../Exercises/3 - Classes/Exercise2");

describe("Todo class", () => {
  test("it is instantiable", () => {
    const todo = new Todo();

    expect(todo instanceof Todo).toBe(true);
  });

  test("it sets id, title and completed on the instance", () => {
    const todo = new Todo(1, "Go to the market", true);

    expect(todo.id).toEqual(1);
    expect(todo.title).toEqual("Go to the market");
    expect(todo.completed).toBe(true);
  });

  test("it defaults the completed attribute to false if one is not provided", () => {
    const todo = new Todo(1, "Go to the market");

    expect(todo.completed).toBe(false);
  });

  test("it can mark a todo item as completed", () => {
    const todo = new Todo(1, "Go to the market");

    expect(todo.completed).toBe(false);

    todo.markComplete();

    expect(todo.completed).toBe(true);
  });

  test("it can mark a todo item as incomplete", () => {
    const todo = new Todo(1, "Go to the market", true);

    expect(todo.completed).toBe(true);

    todo.markIncomplete();

    expect(todo.completed).toBe(false);
  });
});

describe("Dog class", () => {
  test("it is instantiable", () => {
    const dog = new Dog();

    expect(dog instanceof Dog).toBe(true);
  });

  test("it must have name, breed and isay instance variables", () => {
    const dog = new Dog("shadow", "german", "bowbow");

    expect(dog.name).toEqual("shadow");
    expect(dog.breed).toEqual("german");
    expect(dog.isay).toEqual("bowbow");
  });

  test("it can speak", () => {
    const dog = new Dog("shadow", "german", "bowbow");

    expect(dog.speak()).toEqual("bowbow");
  });
});
