const {
  User,
  Human,
  Person,
} = require("../../Exercises/3 - Classes/Exercise1");

describe("User class", () => {
  test("it is instantiable", () => {
    const user = new User();

    expect(user instanceof User).toBe(true);
  });

  test("it has a name instance variable", () => {
    const user = new User("john");

    expect(user.name).toEqual("john");
  });
});

describe("Human class", () => {
  test("it is instantiable", () => {
    const human = new Human();

    expect(human instanceof Human).toBe(true);
  });

  test(".sayHi() returns 'Hi'", () => {
    const human = new Human();

    expect(human.sayHi()).toEqual("Hi");
  });
});

describe("Person class", () => {
  test("it is instantiable", () => {
    const person = new Person();

    expect(person instanceof Human).toBe(true);
    expect(person instanceof Person).toBe(true);
    expect(person instanceof User).toBe(false);
  });

  test("it has name, gender and age instance variables", () => {
    const person = new Person("john", "male", 30);

    expect(person.name).toEqual("john");
    expect(person.age).toEqual(30);
    expect(person.gender).toEqual("male");
  });
});
