const { sum, substract } = require("./Framework/calcs");

async function sumTest(a, b, expected) {
  let result = await sum(a, b);
  expect(result).toBe(expected);
}

async function substractionTest(a, b, expected) {
  let result = await substract(a, b);
  expect(result).toBe(expected);
}

test("Sum test", () => sumTest(5, 5, 10));
test("Substration test", () => substractionTest(5, 5, 10));

async function test(title, callback) {
  try {
    await callback();
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

global.test = test;
global.expect = expect;
