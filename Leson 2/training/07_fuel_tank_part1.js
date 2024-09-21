function fuel(input){
    const fuelType = input[0];
    const litres = Number(input[1]);

    if (fuelType === 'Gasoline') {     // gasiline
        if (litres >= 25) {
            console.log(`You have enough gasoline.`);
        } else {
            console.log(`Fill your tank with gasoline!`);
        }

    } else if (fuelType === 'Diesel') {       // diesel
        if (litres >= 25) {
            console.log(`You have enough diesel.`);
        } else {
            console.log(`Fill your tank with diesel!`);
        }

    } else if (fuelType === 'Gas') {        // gas
        if (litres >= 25) {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Fill your tank with gas!`);
        }

    } else {
        console.log('Invalid fuel!');

    }

}

fuel(['Diesel', 10]);
fuel(['Gasoline', 40]);
fuel(['Gas', 25]);
fuel(['Kerosene', 200]);