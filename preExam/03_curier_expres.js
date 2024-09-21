function curierExpres(input) {
    const weightKG = Number(input[0]);
    const typeServiises = input[1];
    const distanceKM = Number(input[2]);

    let pricePerKm = 0;


    if (weightKG < 1) {
        pricePerKm = 0.03;
    } else if (weightKG < 10) {
        pricePerKm = 0.05;
    } else if (weightKG < 40) {
        pricePerKm = 0.1;
    } else if (weightKG < 90) {
        pricePerKm = 0.15;
    } else if (weightKG <= 150) {
        pricePerKm = 0.2;
    }

    let extraForKG = 0;
    let extraForKM = 0;
    let totalExtra = 0;


    if (typeServiises === 'express') {
        if (weightKG < 1) {
            extraForKG = pricePerKm * (80 / 100);
            extraForKM = weightKG * extraForKG;
            totalExtra = distanceKM * extraForKM;
        } else if (weightKG < 10) {
            extraForKG = pricePerKm * (40 / 100);
            extraForKM = weightKG * extraForKG;
            totalExtra = distanceKM * extraForKM;
        } else if (weightKG < 40) {
            extraForKG = pricePerKm * (5 / 100);
            extraForKM = weightKG * extraForKG;
            totalExtra = distanceKM * extraForKM;
        } else if (weightKG < 90) {
            extraForKG = pricePerKm * (2 / 100);
            extraForKM = weightKG * extraForKG;
            totalExtra = distanceKM * extraForKM;
        } else if (weightKG <= 150) {
            extraForKG = pricePerKm * (1 / 100);
            extraForKM = weightKG * extraForKG;
            totalExtra = distanceKM * extraForKM;
        }

    }
    const price = distanceKM * pricePerKm + totalExtra;
    console.log(`The delivery of your shipment with weight of ${weightKG.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);

}
// curierExpres(["1.5", "standard", "100"]);
curierExpres(["87", "express", "130"]);
// curierExpres(["20", "standard", "349"]);