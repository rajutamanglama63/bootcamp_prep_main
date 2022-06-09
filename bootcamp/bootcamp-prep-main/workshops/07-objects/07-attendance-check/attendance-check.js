let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW

function attendanceCheck(day) {
  debugger;
  let arrOfStdWhoArePresentOnSpecificDay = [];

  for (let i = 0; i < classRoom.length; i++) {
    let eachObj = classRoom[i];
    for (let key in eachObj) {
      // console.log(eachObj[key].length);

      for (j = 0; j < eachObj[key].length; j++) {
        // console.log(eachObj[key][j][day]);

        if (eachObj[key][j][day] === true) {
          // console.log(key);
          arrOfStdWhoArePresentOnSpecificDay.push(key);
        }
      }
    }

    // for (let j = 0; j < eachObj.length; j++) {
    //   if (eachObj[key][day] === true) {
    //     arrOfStdWhoArePresentOnSpecificDay.push(eachObj[key]);
    //   }
    // }
  }

  return arrOfStdWhoArePresentOnSpecificDay;
}

console.log(attendanceCheck("Tuesday"));
