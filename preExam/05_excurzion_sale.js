function excursionSale(input) {
    let seaExcursionAmount = Number(input[0]);
    let mountainExcursionAmount = Number(input[1]);

    let profit = 0;

    let index = 2;
    let pakage = input[index];
    while (pakage !== 'Stop') {
        if (pakage === 'sea' && seaExcursionAmount > 0) {
            profit += 680;
            seaExcursionAmount--;
        } else {
            profit += 0;

        }
        if (pakage === 'mountain' && mountainExcursionAmount > 0) {
            profit += 499;
            mountainExcursionAmount--;

        } else {
            profit += 0;
        }







        if (seaExcursionAmount === 0 && mountainExcursionAmount === 0) {
            console.log('Good job! Everything is sold.');
            break;
        }

        pakage = input[++index];
    }

    console.log(`Profit: ${profit} leva.`);
}
// excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);