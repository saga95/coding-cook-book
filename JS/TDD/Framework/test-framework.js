const { sum, substract } = require("./calcs");

function sumTest(a, b, expected) {
  let result = sum(a, b);
  expect(result).toBe(expected);
}

function substractionTest(a, b, expected) {
  let result = substract(a, b);
  expect(result).toBe(expected);
}

test("Sum test", () => sumTest(5, 5, 10));
test("Substration test", () => substractionTest(5, 5, 10));

function test(title, callback) {
  try {
    callback();
    console.log(`🤜 : ${title} passed`);
  } catch (error) {
    console.log(`👎 : ${title} failed`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error("actual not equals to the expected value");
      }
    },
  };
}
