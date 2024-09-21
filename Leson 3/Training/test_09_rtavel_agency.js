function tavelAgency(input) {
    const city = input[0];
    const pakage = input[1];
    const vip = input[2];
    let days = Number(input[3]);

    let dailyPrice = 0;
    let vipDiscount = 1;

    if (!(city === 'Bansko' || city === 'Borovets' || city === 'Varna' || city === 'Burgas') || !(pakage === 'withEquipment' || pakage === 'noEquipment' || pakage === 'withBreakfast' || pakage === 'noBreakfast')) {
        console.log("Invalid input!");
        return;

    } else if (city === 'Bansko' || city === 'Borovets') {
        if (pakage === 'withEquipment') {
            dailyPrice = 100;
            vipDiscount = 0.9;
        } else if (pakage === 'noEquipment') {
            dailyPrice = 80;
            vipDiscount = 0.95;
        }
    } else if (city === 'Varna' || city === 'Burgas') {
        if (pakage === 'withBreakfast') {
            dailyPrice = 130;
            vipDiscount = 0.88;
        } else if (pakage === 'noBreakfast') {
            dailyPrice = 100;
            vipDiscount = 0.93;
        }
    }

    if (days > 7) {
        days -= 1;
    }

    if (vip === 'no') {
        vipDiscount = 1;
    }

    const finalPrice = days * dailyPrice * vipDiscount;

    if (days <= 0) {
        console.log("Days must be positive number!");
    } else {
        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
    }

}

//tavelAgency(["Borovets", "noEquipment", "yes", "8"]); // за проверка дали ифа за дни работи
tavelAgency(["Borovets", "noEquipment", "yes", "6"]);
tavelAgency(["Bansko", "withEquipment", "no", "2"]);
tavelAgency(["Varna", "withBreakfast", "yes", "5"]);
tavelAgency(["Burgas", "noBreakfast", "no", "4"]);
tavelAgency(["Varna", "withBreakfast", "no", "0"]);
tavelAgency(["Gabrovo", "noBreakfast", "no", "3"]);