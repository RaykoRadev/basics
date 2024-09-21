function sumSeconds(input) {
  const firstTiime = Number(input[0]);
  const secondTiime = Number(input[1]);
  const thirdTiime = Number(input[2]);

  const totalTime = firstTiime + secondTiime + thirdTiime;

  const hour = totalTime / 60;
  const minutes = totalTime % 60;

  if (minutes < 10) {
    console.log(`${Math.floor(hour)}:0${minutes}`);
  } else {
    console.log(`${Math.floor(hour)}:${minutes}`);
  }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
