// YOUR CODE BELOW
function myJoin(array, separator) {
  //   array.join(separator);

  if (separator === undefined) {
    separator = ",";
  }

  let joinedString = "";

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (i !== 0) {
      joinedString += separator;
    }

    if (element !== undefined && element !== null) {
      joinedString += element;
    }
  }
  return joinedString;

  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === undefined) {
  //       array.join("--");
  //     }
  //   }

  //   return array.join(separator);
}

console.log(myJoin(["let's", "make", "a", "list"], " "));
