function logistic(input) {
    const cargo = Number(input[0]);

    let van = 0;
    let truck = 0;
    let train = 0;
    let weight = 0;

    for (let i = 1; i <= cargo; i++) {
        let package = Number(input[i]);

        if (package <= 3) {
            weight += package;
            van += package;
        } else if (package <= 11) {
            weight += package;
            truck += package;
        } else if (package > 11) {
            weight += package;
            train += package;
        }
    }

    const avaragePrice = (200 * van + 175 * truck + 120 * train) / weight;

    console.log(avaragePrice.toFixed(2));
    console.log(`${(van / weight * 100).toFixed(2)}%`);
    console.log(`${(truck / weight * 100).toFixed(2)}%`);
    console.log(`${(train / weight * 100).toFixed(2)}%`);

}

logistic([4, 1, 5, 16, 3]);
// logistic([5, 2, 10, 20, 1, 7]);
