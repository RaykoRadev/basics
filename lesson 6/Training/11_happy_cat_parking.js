function happyCatparrking(input) {
    const days = Number(input[0]);
    const hours = Number(input[1]);

    let dayCount = 0;
    let totalCosts = 0;

    for (let i1 = 1; i1 <= days; i1++) {
        let day = i1;
        dayCount++;
        let dayCosts = 0;
        let pricePerEvenDay = 0;
        let pricePerOddDay = 0;

        if (day % 2 === 0) {
            for (let time = 1; time <= hours; time++) {

                if (time % 2 !== 0) {
                    pricePerEvenDay += 2.50;
                } else {
                    pricePerEvenDay += 1;
                }
            }
            dayCosts += pricePerEvenDay;
        } else {
            for (let time = 1; time <= hours; time++) {

                if (time % 2 === 0) {
                    pricePerOddDay += 1.25;
                } else {
                    pricePerOddDay += 1;
                }
            }
            dayCosts += pricePerOddDay;
        }
        console.log(`Day: ${day} - ${(dayCosts).toFixed(2)} leva`);
        totalCosts += pricePerEvenDay + pricePerOddDay;
    }
    console.log(`Total: ${totalCosts.toFixed(2)} leva`);

}
// happyCatparrking(['2', '5']);
happyCatparrking(['5', '2']);