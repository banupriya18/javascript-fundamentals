const {
  splitString,
  splitStringCustom,
  joinArray,
  joinArrayCustom,
  setFirstItem,
  removeLastItem,
} = require("../../Exercises/4 - Arrays/Exercise1");

describe("splitString()", () => {
  test("it creates an array from a comman delimitted string", () => {
    let result = splitString("john,doe");

    expect(result).toEqual(["john", "doe"]);
  });
});

describe("splitStringCustom()", () => {
  test("it creates an array from a string, with delimitter specified by the user", () => {
    let result = splitStringCustom("john:doe", ":");

    expect(result).toEqual(["john", "doe"]);
  });
});

describe("joinArray()", () => {
  test("it joins an array of elements into a string delimitted by comma", () => {
    let result = joinArray(["john", "doe"]);

    expect(result).toBe("john,doe");
  });
});

describe("joinArrayCustom()", () => {
  test("it joins an array of elements into a string delimitted by comma", () => {
    let result = joinArrayCustom(["john", "doe"], ":");

    expect(result).toBe("john:doe");
  });
});

describe("setFirstItem()", () => {
  test("it joins an array of elements into a string delimitted by comma", () => {
    let result = setFirstItem(["john", "doe"], "jane");

    expect(result).toEqual(["jane", "john", "doe"]);
  });
});

describe("removeLastItem()", () => {
  test("it joins an array of elements into a string delimitted by comma", () => {
    let result = removeLastItem(["john", "doe"]);

    expect(result).toEqual(["john"]);
  });
});
