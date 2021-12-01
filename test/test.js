// https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e
const { addOne } = require("../src/main");

// ASSERTIONS
// 1) ASSERT(expression, str)
// - expression = evaluates to a boolean. An error is thrown if boolean is false
// - str = message that prints if assertion is false
// Notes:
// - there are many different assertion libraries (ex. Chai)
// - below we import node.js library that allows us to run tests
const assert = require("assert");
// Example:
// assert(1 + 1 == 3, "1 + 1 does not equal 3!");

// 2) DESCRIBE(str, cb)
// Arguments:
// - str = string describing what you're testing
// - cb = callback function
// Return: ?
// Notes:
// - describe is a way to group our tests (easier to read)
describe("addOne()", () => {
  it("should add one to input number", () => {
    assert(addOne(1) === 2, "incorrect!");
  });
});
