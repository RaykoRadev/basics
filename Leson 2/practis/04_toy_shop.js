function shop(input) {
  const excursionPrise = Number(input[0]);
  const puzzlesCount = Number(input[1]);
  const dollsCount = Number(input[2]);
  const bearsCount = Number(input[3]);
  const minionsCount = Number(input[4]);
  const trucksCount = Number(input[5]);

  let fullPrise =
    puzzlesCount * 2.6 +
    dollsCount * 3 +
    bearsCount * 4.1 +
    minionsCount * 8.2 +
    trucksCount * 2;

  if (
    puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount >=
    50
  ) {
    fullPrise = fullPrise - fullPrise * 0.25; //fullPrise *= 0.75;
  }
  fullPrise = fullPrise - fullPrise * 0.1; //fullPrise *= 0.9;

  if (fullPrise >= excursionPrise) {
    console.log(`Yes! ${(fullPrise - excursionPrise).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(excursionPrise - fullPrise).toFixed(2)} lv needed.`
    );
  }
}

shop(["40.8", "20", "25", "30", "50", "10"]);
shop(["320", "8", "2", "5", "5", "1"]);
