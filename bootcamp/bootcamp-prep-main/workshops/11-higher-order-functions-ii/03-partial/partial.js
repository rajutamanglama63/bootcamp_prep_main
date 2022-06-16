// YOUR CODE BELOW
function partial(callBackFunct, argA) {
  debugger;
  return function newFunct(argB) {
    return callBackFunct(argA, argB);
  };
}

function callBackFunct(a, b) {
  return a + b;
}
