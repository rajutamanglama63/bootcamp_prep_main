let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },
  currentInventory: function () {
    let totalCost = 0;
    for (let keys in this) {
      // console.log(keys);
      // for (let i = 0; i < this[key].length; i++) {
      //   console.log(this[key].length);
      //   for (let j = 0; j < this[key][i]; j++) {
      //     totalCost += this[key][i][key][cost] * this[key][i][key][quantity];
      //   }
      // }

      for (let key in this[keys]) {
        // console.log(key);
        totalCost += this[keys][key].cost * this[keys][key].quantity;
      }
    }
    return totalCost;
  },

  sale: function (orders) {
    let price = 0;
    if (Object.keys(orders).length === 0) {
      return 0;
    }

    for (let keys in this) {
      // console.log(keys);
      for (let key in this[keys]) {
        for (let ordersKey in orders) {
          // console.log(orders[ordersKey]);
          if (orders[ordersKey] === key) {
            price += this[keys][key].cost;
          }
        }
      }
    }
    this.cash += price;
    return price;
  },
  cash: 0,
};

// YOUR CODE BELOW

// console.log(tacoCatInc.currentInventory());

let order = {
  gourmetShell: "hard treat shell",
  gourmetFishFilling: "salmon",
};

console.log(tacoCatInc.sale(order));
// console.log(tacoCatInc.cash);
