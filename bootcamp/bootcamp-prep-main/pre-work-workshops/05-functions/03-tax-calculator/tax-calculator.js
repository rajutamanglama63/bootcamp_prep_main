// YOUR CODE BELOW
// let priceOfItemBeforeTaxApplied = 200;

// const taxCalculator = (priceOfAnItem, taxValueOfParticularState) => {
//   const priceAfterTax =
//     (taxValueOfParticularState / 100) * priceOfAnItem -
//     priceOfItemBeforeTaxApplied;

//   return priceAfterTax;
// };

// taxCalculator(300, 4);

// let NY = 4 / 100;

// const taxCalculator = (priceOfAnItem, state) => {
//   let priceOfItemAfterTax = priceOfAnItem - state;
//   return priceOfItemAfterTax;
// };

// taxCalculator(50, "NY")

// function taxCalculator(price, state) {
//   if (state === "NY") {
//     return price * 1.04;
//   } else if (state === "NJ") {
//     return price * 1.06625;
//   }
// }

const taxCalculator = (price, state) => {
  if (state === "NY") {
    return price * 1.04;
  } else if (state === "NJ") {
    return price * 1.06625;
  }
};

taxCalculator(50, "NY");
taxCalculator(10, "NJ");
