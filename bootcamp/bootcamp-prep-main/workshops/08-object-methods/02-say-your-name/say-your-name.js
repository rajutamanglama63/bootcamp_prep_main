// YOUR CODE BELOW

let me2 = {
  name: "Raju",

  getGreeting: function () {
    let friend = {
      name: "Jeff",
    };
    return `Hi ${friend.name}, my name is ${this.name}.`;
  },
};

console.log(me2.getGreeting());

// different approach
// let me2 = {
//   name: "Raju",
//   myGreeting: function (yourName) {
//     return `Hi ${yourName}, my name is ${this.name}.`;
//   },
// };

// console.log(me2.myGreeting("Pankaj"));
