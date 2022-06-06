function oddCouple(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(i);
    }

    // newArray.push(number);
    return newArray;
  }
}
