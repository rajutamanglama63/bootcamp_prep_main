// YOUR CODE BELOW
function getDogBreeder(defaultName, defaultAge) {
  function dogBreeder(name = defaultName, age = defaultAge) {
    // checking if user has pass correct value or not
    if (typeof name === "number") {
      (age = name), (name = defaultName);
    }
    let dog = {
      name: name,
      age: age,
    };

    return dog;
  }

  return dogBreeder;
}
