let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
function leetTranslator(normalString) {
  let transformedLeetString = "";

  let leetObject = {};

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];

    let leetChar = leetChars[i];

    leetObject[letter] = leetChar;
  }

  for (let i = 0; i < normalString.length; i++) {
    let letter = normalString[i].toLowerCase();

    let leetChar = leetObject[letter];

    transformedLeetString += leetChar;
  }

  return transformedLeetString;
}

console.log(leetTranslator("Raju"));
