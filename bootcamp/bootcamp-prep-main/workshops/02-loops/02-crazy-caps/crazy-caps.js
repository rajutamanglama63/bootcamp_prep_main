// YOUR CODE BELOW
function crazyCaps(someName) {
  let finalString = "";
  for (let i = 0; i < someName.length; i++) {
    let remainder = i % 2;
    if (remainder === 1) {
      finalString += someName[i].toUpperCase();
    } else {
      finalString += someName[i];
    }
  }
  return finalString;
}
