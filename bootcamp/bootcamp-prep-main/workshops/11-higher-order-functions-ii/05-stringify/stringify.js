// YOUR CODE BELOW
function stringify(callBack) {
  return function newFunction() {
    let requiredVal = "";
    let callBackValue = callBack();

    requiredVal += callBackValue;

    return requiredVal;
  };
}

function bool() {
  return true;
}
