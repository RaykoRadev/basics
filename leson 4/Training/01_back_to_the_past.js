function mashineTime(input) {
    const heritage = Number(input[0]);
    const lastYear = Number(input[1]);

    let expenses = 0;
    let age = 17;

    for (let year = 1800; year <= lastYear; year++) {
        if (year % 2 === 0) {
            expenses += 12000;
        } else {
            age += 2
            expenses += 12000 + 50 * age;
        }
    }

    if (heritage >= expenses) {
        console.log(`Yes! He will live a carefree life and will have ${(heritage - expenses).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(expenses - heritage).toFixed(2)} dollars to survive.`);
    }

}

mashineTime([50000, 1802,]);
mashineTime([100000.15, 1808,]);