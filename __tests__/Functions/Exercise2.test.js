const {
  createUser,
  createPerson,
  AnimalCreator,
  addFriend,
} = require("../../Exercises/2 - Functions/Exercise2");

describe("createUser()", () => {
  test("it returns an object with a username property", () => {
    expect(createUser("john")).toEqual({ username: "john" });
  });
});

describe("createPerson()", () => {
  test("it returns an object with a username property", () => {
    expect(createPerson("john").username).toEqual("john");
  });

  test("it adds an otherArgs property that is an array of all the remaining arguments", () => {
    const person = createPerson("john", { foo: "bar", bar: "baz" }, [1, 2, 3]);

    expect(person.username).toBe("john");
    expect(Array.isArray(person.otherArgs)).toBe(true);
    expect(person.otherArgs[2]).toEqual([1, 2, 3]);
  });
});

describe("AnimalCreator()", () => {
  test("it creates an animal object with a specific shape", () => {
    const sheep = AnimalCreator("Cloud", "sheep", "You can count on me!", [
      "baahhh",
      "arrgg",
      "chewchewchew",
    ]);

    expect(sheep).toEqual({
      username: "Cloud",
      species: "sheep",
      tagline: "You can count on me!",
      noises: ["baahhh", "arrgg", "chewchewchew"],
      friends: [],
    });
  });
});

describe("addFriend()", () => {
  test("it adds a friend to an animal", () => {
    const sheep = AnimalCreator("Cloud", "sheep", "You can count on me!", [
      "baahhh",
      "arrgg",
      "chewchewchew",
    ]);

    const cow = AnimalCreator("Mala", "cow", "I looove milk!", ["mooo"]);

    addFriend(sheep, cow);

    expect(sheep.friends.length).toEqual(1);
    expect(sheep.friends[0]).toEqual(cow);
  });
});
