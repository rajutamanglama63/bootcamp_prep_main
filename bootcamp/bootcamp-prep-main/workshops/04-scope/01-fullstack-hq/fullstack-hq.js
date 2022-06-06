// Edit the code below
let Planet = "Planet Earth";

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(country) {
    return innerFunction("New York State");

    function innerFunction(State) {
      let place = "New York City";
      return innermostFunction();

      function innermostFunction() {
        return (
          "Fullstack HQ is at " +
          Planet +
          ", " +
          country +
          ", " +
          State +
          ", " +
          place
        );
      }
    }
  }
}
