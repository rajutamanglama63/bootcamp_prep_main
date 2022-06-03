// YOUR CODE BELOW
function exponentiate(base, power) {
  let result = 1;

  for (let i = 1; i <= power; i++) {
    result = result * base;
  }
  return result;
}
