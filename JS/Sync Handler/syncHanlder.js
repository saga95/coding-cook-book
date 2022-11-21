const one = () => Promise.resolve("one");
async function myFunc() {
  console.log("In func");
  const res = await one();
  console.log("res: ", res);
}
async function handler() {
  console.log("Before func");
  await myFunc();
  console.log("After func");
}

handler();
