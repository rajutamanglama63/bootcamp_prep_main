// YOUR CODE BELOW
function lastFridayNight(arrayOfTransaction) {
  let totalSpentAmount = 0;

  for (let i = 0; i < arrayOfTransaction.length; i++) {
    let individualTransaction = arrayOfTransaction[i];

    totalSpentAmount += individualTransaction["amount"];
  }

  return totalSpentAmount;
}

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

console.log(lastFridayNight(transactions));
