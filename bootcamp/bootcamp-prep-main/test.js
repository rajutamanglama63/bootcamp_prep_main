// function highAndLow(numbers) {
//   debugger;
//   var arr = numbers.split(" ");
//   var max = arr[0],
//     min = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (parseInt(arr[i]) > max) {
//       max = arr[i];
//     }
//     if (parseInt(arr[i]) < min) {
//       min = arr[i];
//     }
//   }
//   var result = max + " " + min;
//   return result;
// }

// console.log(highAndLow("1 2 3 4 5"));

// const zooInventory = (multiDimensionalArr) => {
//   let newArr = [];
//   let finalArr = [];
//   debugger;
//   for (let i = 0; i < multiDimensionalArr.length; i++) {
//     let elementOfMultiDimensionalArr = multiDimensionalArr[i];
//     if (Array.isArray(elementOfMultiDimensionalArr)) {
//       for (let j = 0; j < elementOfMultiDimensionalArr.length; j++) {
//         newArr.push(elementOfMultiDimensionalArr[j]);
//       }
//     } else {
//       newArr.push(multiDimensionalArr[i]);
//     }
//   }

//   //   newArr.splice(1, 0, "the");
//   //   newArr.splice(3, 0, "is");
//   //   newArr.splice(7, 0, "the");
//   //   newArr.splice(9, 0, "is");
//   //   newArr.splice(11, 0, "the");
//   //   newArr.splice(13, 0, "is");

//   //   newArr.join(" ");

//   //   return newArr;

//   for (k = 0; k < newArr.length; k++) {
//     element = newArr[k];
//     if (Array.isArray(element)) {
//       for (let l = 0; l < element.length; l++) {
//         finalArr.push(element[l]);
//       }
//     } else {
//       finalArr.push(newArr[k]);
//     }
//   }

//   return finalArr;

// };

// const zooInventory = (multiDimensionalArr) => {
//   debugger;
//   let outputArr = [];

//   let firstIndexOfMultiDimensionalArr = multiDimensionalArr[0];
//   let flattenedArrOf1stIdx = [];

//   let secondIndexOfMultiDimensionalArr = multiDimensionalArr[1];
//   let flattenedArrOf2ndIdx = [];

//   let thirdIndexOfMultiDimensionalArr = multiDimensionalArr[2];
//   let flattenedArrOf3rdIdx = [];

//   for (let i = 0; i < firstIndexOfMultiDimensionalArr.length; i++) {
//     let elementOfFirstIndexOfMultiDimensionalArr =
//       firstIndexOfMultiDimensionalArr[i];

//     if (Array.isArray(elementOfFirstIndexOfMultiDimensionalArr)) {
//       for (
//         let j = 0;
//         j < elementOfFirstIndexOfMultiDimensionalArr.length;
//         j++
//       ) {
//         flattenedArrOf1stIdx.push(elementOfFirstIndexOfMultiDimensionalArr[j]);
//       }
//     } else {
//       flattenedArrOf1stIdx.push(firstIndexOfMultiDimensionalArr[i]);
//     }
//   }

//   for (let k = 0; k < secondIndexOfMultiDimensionalArr.length; k++) {
//     let elementOfSecondIndexOfMultiDimensionalArr =
//       secondIndexOfMultiDimensionalArr[k];

//     if (Array.isArray(elementOfSecondIndexOfMultiDimensionalArr)) {
//       for (
//         let l = 0;
//         l < elementOfSecondIndexOfMultiDimensionalArr.length;
//         l++
//       ) {
//         flattenedArrOf2ndIdx.push(elementOfSecondIndexOfMultiDimensionalArr[l]);
//       }
//     } else {
//       flattenedArrOf1stIdx.push(secondIndexOfMultiDimensionalArr[k]);
//     }
//   }

//   for (let m = 0; m < thirdIndexOfMultiDimensionalArr.length; m++) {
//     let elementOfThirdIndexOfMultiDimensionalArr =
//       thirdIndexOfMultiDimensionalArr[m];

//     if (Array.isArray(elementOfThirdIndexOfMultiDimensionalArr)) {
//       for (
//         let n = 0;
//         n < elementOfThirdIndexOfMultiDimensionalArr.length;
//         n++
//       ) {
//         flattenedArrOf3rdIdx.push(elementOfThirdIndexOfMultiDimensionalArr[n]);
//       }
//     } else {
//       flattenedArrOf1stIdx.push(thirdIndexOfMultiDimensionalArr[m]);
//     }
//   }

//   outputArr.push(flattenedArrOf1stIdx);
//   outputArr.push(flattenedArrOf2ndIdx);
//   outputArr.push(flattenedArrOf3rdIdx);

//   return outputArr;
// };

// // [
// //   "King Kong the gorilla is 42.",
// //   "Nemo the fish is 5.",
// //   "Punxsutawney Phil the groundhog is 11.",
// // ];
// let myZoo = [
//   ["King Kong", ["gorilla", 42]],
//   ["Nemo", ["fish", 5]],
//   ["Punxsutawney Phil", ["groundhog", 11]],
// ];

// console.log(zooInventory(myZoo));

// function zooInventory(zoo) {
//   // create a new array to hold the finished sentences
//   let sentences = [];

//   // loop through the entire zoo array
//   for (let i = 0; i < zoo.length; i++) {
//     // store the current animal
//     let animal = zoo[i];

//     // store the name of the current animal
//     let name = animal[0];

//     // store the species of the current animal
//     let species = animal[1][0];

//     // store the age of the current animal
//     let age = animal[1][1];

//     // use string interpolation and our well-named variables to contruct the sentence
//     let sentence = `${name} the ${species} is ${age}.`;

//     // push the sentence into the sentences array
//     sentences.push(sentence);
//   }

//   // return the sentences array after the for loop
//   return sentences;
// }

/*
    the alternative solution below doesn't store the values from the zoo array in
    their own variables. although this solution requires fewer lines of code, it
    is much harder to read.
  */

// function zooInventory(zoo) {
//   let sentences = [];

//   for (let i = 0; i < zoo.length; i++) {
//     sentences.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`);
//   }

//   return sentences;
// }

// console.log(
//   zooInventory([
//     ["King Kong", ["gorilla", 42]],
//     ["Nemo", ["fish", 5]],
//     ["Punxsutawney Phil", ["groundhog", 11]],
//   ])
// );

// function makeGrid(numColumns, numRows) {
//   debugger;
//   let grid = [];

//   for (let i = 0; i < numRows; i++) {
//     let row = [];

//     for (let j = 0; j < numColumns; j++) {
//       row.push(j + 1);
//     }
//     grid.push(row);
//   }

//   return grid;
// }

// console.log(makeGrid(2, 3));

let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// let obj = {};
// for (let i = 0; i < animalNoises.length; i++) {
//   obj = animalNoises[i];
//   // obj.chicken.Germany;
// }

// let sound = obj.chicken.Germany;

// console.log(sound);

// function petSounds(animalName, country) {
//   let resultString = "";
//   let obj = {};

//   for (let i = 0; i < animalNoises.length; i++) {
//     obj = animalNoises[i];
//     // sound += obj[animalName][country];

//     if (animalName in obj) {
//       let countrySound = obj[animalName];

//       let sound = countrySound[country];

//       animalName = animalName[0].toUpperCase() + animalName.slice(1) + "s";
//       resultString += animalName + " in " + country + " say " + sound;
//     }
//   }
//   return resultString;
// }

// console.log(petSounds("chicken", "Iceland"));

// function frequencyAnalysis(str) {
//   let result = {};

//   for (let i = 0; i < str.length; i++) {
//     let currentVal = str[i];
//     if (currentVal in result) {
//       result[currentVal]++;
//     } else {
//       result[currentVal] = 1;
//     }
//   }

//   return result;
// }

// console.log(frequencyAnalysis("raasaju the great."));

// function dogBreeder(dogName = "Steve", dogAge = 0) {
//   let result = {};

//   // if (dogName === undefined) {
//   //   dogName = "Steve";
//   // }

//   // if (dogAge === undefined) {
//   //   dogAge = 0;
//   // }

//   if (typeof dogName === "number") {
//     dogAge = dogName;
//     dogName = "Steve";
//     console.log(21);
//   }

//   result.name = dogName;
//   result.age = dogAge;
//   return result;
// }

// console.log(dogBreeder(3));

let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// function attendanceCheck(day) {
//   debugger;
//   let arrOfStdWhoArePresentOnSpecificDay = [];

//   for (let i = 0; i < classRoom.length; i++) {
//     let eachObj = classRoom[i];
//     for (let key in eachObj) {
//       // console.log(eachObj[key].length);

//       for (j = 0; j < eachObj[key].length; j++) {
//         // console.log(eachObj[key][j][day]);

//         if (eachObj[key][j][day] === true) {
//           // console.log(key);
//           arrOfStdWhoArePresentOnSpecificDay.push(key);
//         }
//       }
//     }

// for (let j = 0; j < eachObj.length; j++) {
//   if (eachObj[key][day] === true) {
//     arrOfStdWhoArePresentOnSpecificDay.push(eachObj[key]);
//   }
// }
// }

// return arrOfStdWhoArePresentOnSpecificDay;
// }

// console.log(attendanceCheck("Tuesday"));

// let me = {
//   name: "Raju",
//   getGreeting: function () {
//     return "Hello, my name is " + this.name;
//   },
// };

// console.log(me.name);
// console.log(me.getGreeting());

// let me2 = {
//   name: "Raju",

//   myGreeting: function () {
//     let friend = {
//       name: "Jeff",
//     };
//     return `Hi ${friend.name}, my name is ${this.name}.`;
//   },
// };

// console.log(me2.myGreeting());

// function callThemAll(objectAddition, val) {
//   let resultArr = [];

// console.log(objectAddition.addTen(val));

//   for (let keys in objectAddition) {
//     if (typeof objectAddition[keys] === "function") {
//      resultArr.push(objectAddition[keys](val))
//     }
//   }

//   return resultArr;
// }

// let addsNums = {
//   addTen: function (num) {
//     return num + 10;
//   },

//   addTwenty: function (num) {
//     return num + 20;
//   },

//   someProperty: "value",
// };

// console.log(callThemAll(addsNums, 50));

//

// function veryOdd(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(veryOdd(allTheNums));

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// function veryOddMutant(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr[i] = "normie";

//       count++;
//     }
//   }

//   // return allTheNums;
//   return count;
// }

// console.log(veryOddMutant(allTheNums));

// function cloneMachine(animalObj) {
//   let clonedAnimal = {};

//   clonedAnimal.name = animalObj["name"] + "Clone";
//   clonedAnimal.species = animalObj["species"];
//   clonedAnimal.offspring = [];

//   // console.log(clonedAnimal);
//   animalObj.offspring.push(clonedAnimal.name);

//   return clonedAnimal;
// }

// let spike = {
//   name: "Spike",
//   species: "dog",
//   offspring: [],
// };

// let spikeClone = cloneMachine(spike);
// // console.log(spike);
// console.log(spikeClone);

// function mySplice(arr, startIndex, numOfElementToDel, val) {
//   let requiredArr = [];
//   let deletedNum = [];
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] === startIndex) {
//   //     arr[numOfElementToDel] = val;
//   //   }

//   // }

//   for (let i = 0; i < startIndex; i++) {
//     requiredArr.push(arr[i]);
//   }

//   for (let j = startIndex; j < startIndex + numOfElementToDel; j++) {
//     deletedNum.push(arr[j]);
//   }

//   requiredArr.push(val);

//   for (let k = startIndex + numOfElementToDel; k < arr.length; k++) {
//     requiredArr.push(arr[k]);
//   }

//   while (arr.length) {
//     arr.pop();
//   }

//   for (let l = 0; l < requiredArr.length; l++) {
//     arr.push(requiredArr[l]);
//   }

//   return deletedNum;
// }

// console.log(mySplice([1, 2, 3], 1, 1, "rock"));

// const reverseArray = (arr) => {
//   let newReversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let currentArr = arr[i];
//     newReversedArr.push(currentArr);
//   }

//   return newReversedArr;
// };

// console.log(reverseArray([1, 2, 3, 4, 5]));

// a = [1, 2, [3, 4]];
// b = a.slice();

// a[0] = 1;

// b[2][0] = 123;
// console.log(a);
// console.log(b);

// function functionLogger(func, arg) {
//   console.log("Function starting");
//   console.log("Function complete");

//   return func(arg);
// }

// console.log(functionLogger((name) => `Hello ${name}`, "Raju"));

// const finderFunction = (arr, cbFunc) => {
//   return cbFunc(arr);
// };

// const isEven = (num) => {
//   console.log(num);
//   let indexFound = 1;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       return i;
//     } else {
//       indexFound = 0;
//     }
//   }
//   if (indexFound === 0) {
//     return -1;
//   }
// };

// console.log(finderFunction([1, 3, 5], isEven));

// function whosASpecial(arr) {
//   let resultStr = "";

//   for (let i = 0; i < arr.length; i++) {
//     let currentObj = arr[i];
//     // console.log(currentObj);

//     resultStr += `${currentObj.name} the ${currentObj.species} is very special! `;
//   }

//   return resultStr.trim();
// }

// let specialPets = [
//   {
//     name: "Sadie",
//     species: "cat",
//   },
//   {
//     name: "Layla",
//     species: "cat",
//   },
//   {
//     name: "Bogie",
//     species: "dog",
//   },
// ];

// console.log(whosASpecial(specialPets));

// function myForEach(arr, callBackFunction) {
//   for (i = 0; i < arr.length; i++) {
//     callBackFunction(arr[i], i);
//   }
// }

// let sum = 0;

// function addToSum(num) {
//   sum += num;
// }

// myForEach([1, 2, 3], addToSum);
// console.log(sum);

// function chainReaction(startingVal, arr) {
//   let returnVal0;
//   let returnVal1;
//   let returnVal2;

//   funct1 = arr[0];
//   returnVal0 = funct1(startingVal);

//   funct2 = arr[1];
//   returnVal1 = funct2(returnVal0);

//   funct3 = arr[2];
//   returnVal2 = funct3(returnVal1);

//   return returnVal2;
// }

// function addTen(num) {
//   return num + 10;
// }

// function subtractFive(num) {
//   return num - 5;
// }

// function multiplyFive(num) {
//   return num * 5;
// }

// console.log(chainReaction(0, [addTen, subtractFive, multiplyFive]));
// // chainReaction(0, [subtractFive, multiplyFive, addTen]);

// function billerBuilder(state) {
//   return (itemPrice) => {
//     let finalPrice = 0;
//     if (state === "NY") {
//       // finalPrice += (3 / 100) * itemPrice + (4 / 100) * itemPrice;
//       finalPrice += itemPrice * 1.03 * 1.04;
//     } else if (state === "NJ") {
//       // finalPrice += (5 / 100) * itemPrice + (6.625 / 100) * itemPrice;
//       finalPrice += itemPrice * 1.05 * 1.06625;
//     }

//     return finalPrice;
//   };
// }

// console.log(billerBuilder("NY"));
// // console.log(finalPriceOfItem(100));

// const timesTableGenerator = (num1) => {
//   return function product(num2) {
//     return num1 * num2;
//   };
// };

// let timesTable = timesTableGenerator(2);
// console.log(timesTable(9));

// function partial(callBackFunct, argA) {
//   return function newFunct(argB) {
//     debugger;
//     return callBackFunct(argA, argB);
//   };
// }

// function addNumber(a, b) {
//   return a + b;
// }

// let p = partial(addNumber, 50);
// console.log(p(45));

// function callCount() {
//   let requiredNumber = 0;
//   return function newFunction() {
//     return requiredNumber++;
//   };
// }

// let newFunctQ = callCount();
// console.log(newFunctQ());
// console.log(newFunctQ());
// console.log(newFunctQ());

// function stringify(callBack) {
//   return function newFunction() {
//     let requiredVal = "";
//     let callBackValue = callBack();

//     requiredVal += callBackValue;

//     // console.log(requiredVal);

//     return requiredVal;
//   };
// }

// function bool() {
//   return true;
// }

// let a = stringify(bool);
// console.log(typeof a());

// function getDogBreeder(defaultName, defaultAge) {
//   function dogBreeder(name = defaultName, age = defaultAge) {
//     // checking if user has pass correct value or not
//     if (typeof name === "number") {
//       (age = name), (name = defaultName);
//     }
//     let dog = {
//       dogName: name,
//       dogAge: age,
//     };

//     return dog;
//   }

//   return dogBreeder;
// }

// let a = getDogBreeder("Snoop doggy dog", 0);
// console.log(a(2));

function cacheSavings(cb) {
  let cache = {};
  function newFunct(arg) {
    if (!(arg in cache)) {
      let result = cb(arg);

      cache[arg] = result;
    }
    return cache;
  }

  return newFunct;
}

function numberAdditon(num) {
  return num + 10;
}

let c = cacheSavings(numberAdditon);
console.log(c(100));
