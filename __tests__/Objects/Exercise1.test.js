let { person, animal } = require("../../Exercises/1 - Objects/Exercise1");

test("the person object must have all the required properties", () => {
  expect(typeof person.name).toBe("string");
  expect(typeof person.age).toBe("number");
  expect(typeof person.gender).toBe("string");
  expect(typeof person.talk).toBe("function");
});

test("the animal object must have all the required properties", () => {
  expect(typeof animal.type).toBe("string");
  expect(typeof animal.breed).toBe("string");
  expect(typeof animal.name).toBe("string");
  expect(typeof animal.age).toBe("number");
  expect(typeof animal.talk).toBe("function");
});
