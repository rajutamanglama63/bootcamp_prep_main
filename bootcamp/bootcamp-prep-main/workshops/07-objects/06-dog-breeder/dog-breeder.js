// YOUR CODE BELOW
function dogBreeder(dogName = "Steve", dogAge = 0) {
  let result = {};

  //   if (dogName === undefined) {
  //     dogName = "Steve";
  //   }

  //   if (dogAge === undefined) {
  //     dogAge = 0;
  //   }

  if (typeof dogName === "number") {
    dogAge = dogName;
    dogName = "Steve";
  }

  result.name = dogName;
  result.age = dogAge;
  return result;
}
