function traveling(input) {
    let destination = input[0];
    let budget = Number(input[1]);
    let monney = 2;
    let savedmoney = 0;

    while (destination !== 'End') {
        while (budget > savedmoney) {
            let newIncoms = Number(input[monney]);
            savedmoney += newIncoms;
            monney++
        }

        console.log(`Going to ${destination}!`);
        destination = input[monney];
        budget = Number(input[++monney])
        savedmoney = 0;
        monney++;
    }

}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);