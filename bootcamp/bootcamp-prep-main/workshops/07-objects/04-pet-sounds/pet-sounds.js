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

// YOUR CODE BELOW
// function petSounds(animalName, country) {
//   // let sound = "";
//   // let resultString = "";
//   let obj = {};

//   for (let i = 0; i < animalNoises.length; i++) {
//     obj = animalNoises[i];

//     // sound += obj[animalName][country];
//     if (animalName in obj) {
//       let countrySpecificSound = obj[animalName];

//       let sound = countrySpecificSound[country];

//       animalName = animalName[0].toUpowerCase() + animalName.slice(1) + "s";

//       return animalName + " in " + country + " say " + sound;
//     }
//   }

//   // return resultString;
// }

function petSounds(animalName, country) {
  let resultString = "";
  let obj = {};

  for (let i = 0; i < animalNoises.length; i++) {
    obj = animalNoises[i];
    // sound += obj[animalName][country];

    if (animalName in obj) {
      let countrySound = obj[animalName];

      let sound = countrySound[country];

      animalName = animalName[0].toUpperCase() + animalName.slice(1) + "s";
      resultString += animalName + " in " + country + " say " + sound;
    }
  }
  return resultString;
}

console.log(petSounds("dog", "Korea"));
