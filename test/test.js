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
// describe("addOne()", () => {
//   it("should add one to input number", () => {
//     assert(addOne(1) === 2, "incorrect!");
//   });
// });


// https://stackoverflow.com/questions/32660241/mocha-beforeeach-vs-before-execution/32682451
// 3) ORDER OF FUNCTIONS BEING CALLED:
// - beforeEach will run before every it callback in it's current scope!! 
//   but logic inside describe that's not in it block will run before beforeEach!
// Example 1):
// beforeEach(() => {
//   console.log("beforeEach");        // 3  5  7
// });

// describe("describe", () => {      
//   console.log("describe inner 1");  // 1
//   console.log("describe inner 2");  // 2
  

//   it("it", () => {                
//     console.log("it inner");        // 4
//     assert(true);
//   });

//   it("it", () => {                
//     console.log("it inner");        // 6
//     assert(true);
//   });
// });

// describe("describe", () => {      

//   it("it", () => {                
//     console.log("it inner");        // 8
//     assert(true);
//   });
// });


// Example 2):
describe("describe", () => {      
  beforeEach(() => {
    console.log("beforeEach");    // 1
  });

  it("it", () => {                
    console.log("it inner");      // 2
    assert(true);
  });
});

describe("describe", () => {      
  it("it", () => {                
    console.log("it inner");      // 3
    assert(true);
  });
});