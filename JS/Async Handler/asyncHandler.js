/*
async handler
*/

const one = () => Promise.resolve("one");

async function myFunc() {
  console.log("In func");
  const res = await one();
  console.log("res: ", res);
}

console.log("Before func");
myFunc();
console.log("After func");
