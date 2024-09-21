function vetParking(input) {
    const days = Number(input[0]);
    const hours = Number(input[1]);

    let counterD = 0;
    let totalPrice = 0;

    for (let i = 1; i <= days; i++) {
        counterD++;
        let costs = 0;

        if (counterD % 2 === 0) {

            for (let hour = 1; hour <= hours; hour++) {

                if (hour % 2 !== 0) {
                    costs += 2.5;
                } else {
                    costs += 1;
                }
            }
        } else {
            for (let hour = 1; hour <= hours; hour++) {

                if (hour % 2 === 0) {
                    costs += 1.25;
                } else {
                    costs += 1;
                }
            }
        }
        console.log(`Day: ${counterD} - ${costs.toFixed(2)} leva`);
        totalPrice += costs
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);

}
vetParking(['2', '5']);
// vetParking(['5', '2']);