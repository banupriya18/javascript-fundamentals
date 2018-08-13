### JavaScript Fundamentals

---

#### Introduction

This repository introduces you to the fundamental concepts of the JavaScript language using a hands-on approach. Here we cover the following :

- Objects
- Arrays
- Functions & Scope
- Classes

---

#### Installation

**Step 1 :** Clone this repository.

```sh
git clone git@github.com:vjrngn/javascript-fundamentals.git
```

**Step 2 :** `cd` into that directory.

```sh
cd javascript-fundamentals
```

**Step 3 :** Once you're in the directory install all dependencies.

```sh
npm install
```

---

#### Usage

You will find each topic - `Object`, `Arrays`, `Functions & Scope` and `Classes` in it's own folder (or directory) within the `Exercises` folder (or directory).

Each topic has an `Introduction.md` file that explains the concept in-depth.
**Go through the `Introduction.md` file before attempting the exercises.**

If you get stuck when trying to complete an exercise, refer back to the topic's `Introduction.md` file and you will find your answer there.

If, for some reason, the `Introduction.md` file does not help solving your bug / issue, refer the [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) documentation.

---

#### How do I know my solution is right ?

This repository uses the `jest` testing framework to ensure your solutions to the exercises are correct.

Before starting an exercise, start the appropriate test suite.

For example, if you start to work on `Exercise1.js` on `Arrays`, run the following command before writing your code :

```sh
npm run arrays:exercise1
```

**All test commands follow the pattern `topic:exercise{number}`.**

The test suite has been configured to run automatically every time you save the corresponding file.

#### Test command reference

| Topic     | Exercise  | Test Command                     |
| --------- | --------- | -------------------------------- |
| Objects   | Exercise1 | `sh npm run objects:exercise1`   |
| Objects   | Exercise2 | **No tests for this exercise**   |
| Functions | Exercise1 | `sh npm run functions:exercise1` |
| Functions | Exercise2 | `sh npm run functions:exercise2` |
| Classes   | Exercise1 | `sh npm run classes:exercise1`   |
| Classes   | Exercise2 | `sh npm run classes:exercise2`   |
| Arrays    | Exercise1 | `sh npm run arrays:exercise1`    |
| Arrays    | Exercise2 | `sh npm run arrays:exercise2`    |
