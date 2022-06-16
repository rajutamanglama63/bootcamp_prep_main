// YOUR CODE BELOW
function cacheSavings(cb) {
  let cache = {};
  function newFunct(arg) {
    if (!(arg in cache)) {
      let result = cb(arg);

      cache[arg] = result;
    }
    return cache[arg];
  }

  return newFunct;
}

function numberAdditon(num) {
  return num + 10;
}
