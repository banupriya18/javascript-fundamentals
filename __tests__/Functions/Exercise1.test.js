const {
  sum,
  multiply,
  fullName,
  createPerson,
} = require("../../Exercises/2 - Functions/Exercise1");

test("sum() adds two numbers", () => {
  expect(sum(5, 5)).toBe(10);
});

test("multiply() return the product of two numbers", () => {
  expect(multiply(2, 5)).toBe(10);
});

test("fullName() concatenates two strings", () => {
  expect(fullName("john", "doe")).toBe("john doe");
});

describe("createPerson()", () => {
  test("it returns an object", () => {
    expect(typeof createPerson()).toBe("object");
  });

  test("it returns an object with the expected keys and values", () => {
    const person = createPerson("john", 29, "male");

    expect(person.name).toBe("john");
    expect(person.age).toBe(29);
    expect(person.gender).toBe("male");
  });
});
