// YOUR CODE BELOW
const functionLogger = (func, arg) => {
  console.log("Function starting");
  console.log("Function complete");

  return func(arg);
};

console.log(functionLogger((name) => `Hello ${name}`, "Raju"));
