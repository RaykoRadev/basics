function evenPower(input) {
    let powers = Number(input[0]);

    // for (let power = 0; power <= powers; power += 2) {

    //     console.log(Math.pow(2, power));

    // }

    for (i = 0; i <= powers; i += 2) {
        console.log(Math.pow(2, i));
    }



}

evenPower(["3"]);
evenPower(["4"]);
evenPower(["5"]);
evenPower(["6"]);
evenPower(["7"]);