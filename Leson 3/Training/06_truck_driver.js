function truckdriver(input) {
    const SEASON_DURATION = 4;

    const season = input[0];
    const kmPerMonth = Number(input[1]);

    let pricePerKm = 0;

    if (kmPerMonth <= 5000) {
        if (season === 'Spring' || season === 'Autumn') {
            pricePerKm = 0.75;
        } else if (season === 'Summer') {
            pricePerKm = 0.9;
        } else if (season === 'Winter') {
            pricePerKm = 1.05;
        }

    } else if (kmPerMonth <= 10000) {
        if (season === 'Spring' || season === 'Autumn') {
            pricePerKm = 0.95;
        } else if (season === 'Summer') {
            pricePerKm = 1.1;
        } else if (season === 'Winter') {
            pricePerKm = 1.25;
        }

    } else if (kmPerMonth > 10000) {
        pricePerKm = 1.45;
    }

    const seasonalPrice = kmPerMonth * pricePerKm * SEASON_DURATION;
    const priceWithTaxes = seasonalPrice * 0.9;

    console.log(priceWithTaxes.toFixed(2));
}

truckdriver(['Summer', 3455]);
truckdriver(['Winter', 4350]);
truckdriver(['Winter', 5678]);
truckdriver(['Winter', 16042]);
truckdriver(['Spring', 1600]);
truckdriver(['Autumn', 8600]);
truckdriver(['Spring', 16942]);
