// YOUR CODE BELOW
// let firstName;
// let lastName = "Doe";

const defaultGreet = (firstName, lastName) => {
  if (lastName === undefined) {
    lastName = "Doe";
  }
  return "Hi " + firstName + " " + lastName + "!";
};

// defaultGreet("Raju", "Lama");
// defaultGreet("John");

// function defaultGreet(firstName, lastName) {
//   if (lastName === undefined) {
//     lastName = "Doe";
//   }
//   return "Hi " + firstName + " " + lastName + "!";
// }
