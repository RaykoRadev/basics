function rentcar(input) {
    const budget = Number(input[0]);
    const season = input[1];

    let classtype = '';
    let percentige = 1;
    let typeCar = '';

    if (budget <= 100) {
        classtype = 'Economy class';
        if (season === 'Summer') {
            percentige = 0.35;
        } else {
            percentige = 0.65;
        }
    } else if (budget <= 500) {
        classtype = 'Compact class';
        if (season === 'Summer') {
            percentige = 0.45;
        } else {
            percentige = 0.8;
        }
    } else if (budget > 500) {
        classtype = 'Luxury class';
        percentige = 0.9;
    }
    if (season === 'Winter' || classtype === 'Luxury class') {
        typeCar = 'Jeep';
    } else {
        typeCar = 'Cabrio';
    }

    console.log(classtype);
    console.log(`${typeCar} - ${(budget * percentige).toFixed(2)} `);

}

rentcar([450, 'Summer']);
rentcar([450, 'Winter']);
rentcar([99.99, 'Summer']);
rentcar([70.50, 'Winter']);
rentcar([1010, 'Summer']);
rentcar([1010, 'Winter']);
