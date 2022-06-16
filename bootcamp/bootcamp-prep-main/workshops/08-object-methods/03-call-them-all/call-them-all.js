// YOUR CODE BELOW
function callThemAll(object, val) {
  let resultArr = [];

  // console.log(objectAddition.addTen(val));

  //   resultArr.push(objectAddition.addTen(val));

  //   resultArr.push(objectAddition.addTwenty(val));

  for (let key in object) {
    if (typeof object[key] === "function") {
      resultArr.push(object[key](val));
    }
  }

  return resultArr;
}

let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

console.log(callThemAll(addsNums, 50));
