function score(input) {
  const randomNumber = Number(input[0]);
  let bonus = 0;

  if (randomNumber <= 100) {
    bonus = bonus + 5;
  } else if (randomNumber <= 1000) {
    bonus = randomNumber * 0.2;
  } else {
    bonus = randomNumber * 0.1;
  }

  if (randomNumber % 2 === 0) {
    bonus = bonus + 1;
  } else if (randomNumber % 10 === 5) {
    bonus = bonus + 2;
  }
  console.log(bonus);
  console.log(bonus + randomNumber);
}

score(["20"]);
score(["175"]);
score(["2703"]);
score(["15875"]);
