// YOUR CODE BELOW
function billerBuilder(state) {
  return function finalPriceOfItem(itemPrice) {
    let finalPrice = 0;
    if (state === "NY") {
      finalPrice += itemPrice * 1.03 * 1.04;
    } else if (state === "NJ") {
      finalPrice += itemPrice * 1.05 * 1.06625;
    }

    return finalPrice;
  };

  //   return finalPriceOfItem(100);
}

console.log(billerBuilder("NY"));
