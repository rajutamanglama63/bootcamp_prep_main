// YOUR CODE BELOW
function cloneMachine(animalObj) {
  let clonedAnimal = {};

  clonedAnimal.name = animalObj["name"] + "Clone";
  clonedAnimal.species = animalObj["species"];
  clonedAnimal.offspring = [];

  // console.log(clonedAnimal);
  animalObj.offspring.push(clonedAnimal.name);

  return clonedAnimal;
}

let spike = {
  name: "Spike",
  species: "dog",
  offspring: [],
};

let spikeClone = cloneMachine(spike);
console.log(spike);
