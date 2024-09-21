function extratime(input) {
  let hour = Number(input[0]);
  let minutes = Number(input[1]);

  minutes += 15;

  if (minutes >= 60) {
    hour += 1;
    minutes -= 60;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  if (minutes < 10) {
    console.log(`${hour}:0${minutes}`);
  } else {
    console.log(`${hour}:${minutes}`);
  }
}

extratime(["1", "46"]);
extratime(["0", "01"]);
extratime(["23", "59"]);
extratime(["11", "08"]);
extratime(["12", "49"]);
