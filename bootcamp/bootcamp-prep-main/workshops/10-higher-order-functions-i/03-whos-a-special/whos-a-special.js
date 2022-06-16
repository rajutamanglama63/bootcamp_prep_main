// YOUR CODE BELOW
function whosASpecial(arr) {
  let resultStr = "";

  for (let i = 0; i < arr.length; i++) {
    let currentObj = arr[i];

    resultStr += `${currentObj.name} the ${currentObj.species} is very special! `;
  }

  return resultStr.trim();
}

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
