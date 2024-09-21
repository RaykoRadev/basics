function jorney(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let expensis = 0;
    let destination = '';
    let typeSettlement = '';

    if (budget <= 100) {
        destination = 'Bulgaria'

        if (season === 'summer') {
            typeSettlement = 'Camp';
            expensis = 0.30;
        } else if (season === 'winter') {
            typeSettlement = 'Hotel';
            expensis = 0.70;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            typeSettlement = 'Camp';
            expensis = 0.4;
        } else if (season === 'winter') {
            typeSettlement = 'Hotel';
            expensis = 0.8;
        }
    } else if (budget > 1000) {
        destination = 'Europe'
        typeSettlement = 'Hotel';
        expensis = 0.9;
    }

    const spentMoney = budget * expensis;

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeSettlement} - ${spentMoney.toFixed(2)}`);

}

jorney(["50", "summer"]);
jorney(["75", "winter"]);
jorney(["678.53", "winter"]);
jorney(["1500", "summer"]);