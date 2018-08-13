const {
  arraySum,
  onlyEvenNumbers,
  getSpecies,
  getMaleUsers,
  multiply,
} = require("../../Exercises/4 - Arrays/Exercise2");

describe("arraySum()", () => {
  test("it adds the elements of an array", () => {
    const result = arraySum([1, 2, 3]);

    expect(result).toEqual(6);
  });
});

describe("onlyEvenNumbers()", () => {
  test("it filters out even numbers", () => {
    const result = onlyEvenNumbers([1, 2, 3, 4, 5, 6]);

    expect(result).toEqual([2, 4, 6]);
  });
});

describe("getSpecies()", () => {
  test("it returns an array of objects with only the username property", () => {
    const animals = [
      {
        username: "Cloud",
        species: "sheep",
        tagline: "You can count on me!",
        noises: ["baahhh", "arrgg", "chewchewchew"],
        friends: [],
      },
      {
        username: "foobar",
        species: "dog",
        tagline: "You can count on me!",
        noises: ["baahhh", "arrgg", "chewchewchew"],
        friends: [],
      },
    ];

    const result = getSpecies(animals);

    expect(result).toEqual([{ species: "sheep" }, { species: "dog" }]);
  });
});

describe("getMaleUsers()", () => {
  test("it filters male users", () => {
    const users = [
      {
        username: "john",
        gender: "male",
      },
      {
        username: "jane",
        gender: "female",
      },
    ];

    const result = getMaleUsers(users);
    expect(result).toEqual([{ username: "john", gender: "male" }]);
  });
});

describe("multiply()", () => {
  test("it multiplies each element in an array by 2", () => {
    const numbers = [1, 2, 3];

    const result = multiply(numbers);
    expect(result).toEqual([2, 4, 6]);
  });
});
