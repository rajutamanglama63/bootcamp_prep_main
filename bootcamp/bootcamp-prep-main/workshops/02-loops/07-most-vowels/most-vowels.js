// YOUR CODE BELOW
function mostVowels(str) {
  let vowels = "aeiou";
  let wordWithHighestCount = "";
  let highCount = 0;
  let currentWord = "";
  let currentCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentCount > highCount) {
        wordWithHighestCount = currentWord;
        highCount = currentCount;
      }
      currentWord = "";
      currentCount = 0;
      debugger;
    } else {
      currentWord += str[i];
      for (let j = 0; j < vowels.length; j++) {
        if (str[i] === vowels[j]) {
          currentCount++;
          break;
        }
      }
    }
  }
  if (currentCount > highCount) {
    wordWithHighestCount = currentWord;
    highCount = currentCount;
  }

  if (wordWithHighestCount[wordWithHighestCount.length - 1] === ".") {
    wordWithHighestCount = wordWithHighestCount.slice(
      0,
      wordWithHighestCount.length - 1
    );
  }

  return wordWithHighestCount;
}
