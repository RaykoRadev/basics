function baggs(input) {
    // до 10кг – 20% от цената на багаж над 20кг
    // между 10кг и 20кг вкл. – 50% от цената на багаж над 20кг.
    //повече от 30 дни - цената на багажа се оскъпява с 10%
    // между 7 и 30 дни вкл. - цената на багажа се оскъпява с 15%
    //по-малко от 7 дни - цената на багажа се оскъпява с 40%
    
    const lugguageOver20Kg = Number(input[0]);
    const kgsLugguage = Number(input[1]);
    const daysUntilTrip = Number(input[2]);
    const numbersOfLugguage = Number(input[3]);

    let taxLuggage = 0

    if (kgsLugguage < 10) {
        taxLuggage = lugguageOver20Kg * 0.2;
    } else if (10 <= kgsLugguage && kgsLugguage <= 20) {
        taxLuggage = lugguageOver20Kg / 2;
    } else if (kgsLugguage > 20) {
        taxLuggage = lugguageOver20Kg;
    }

    if (daysUntilTrip > 30) {
        taxLuggage = taxLuggage + taxLuggage * 0.1;
    } else if (7 <= daysUntilTrip && daysUntilTrip <=30) {
        taxLuggage = taxLuggage + taxLuggage * 0.15;
    } else if (daysUntilTrip < 7) {
        taxLuggage = taxLuggage + taxLuggage * 0.4;
    }

    const totaPrice = taxLuggage * numbersOfLugguage;

    console.log(`The total price of bags is: ${totaPrice.toFixed(2)} lv.`);

}

baggs(["30", "18", "15", "2"]);
baggs(["25.50", "5", "36", "6"]);
baggs(["63.80", "23", "3", "1"]);