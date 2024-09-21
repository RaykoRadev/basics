function commision(input) {
    const city = input[0];
    const sales = Number(input[1]);

    let percentige = 0

    if (city === 'Sofia') {
        if (0 <= sales && sales <= 500) {
            percentige = 0.05;
        } else if (500 < sales && sales <= 1000) {
            percentige = 0.07;
        } else if (1000 < sales && sales <= 10000) {
            percentige = 0.08;
        } else if (sales > 10000) {
            percentige = 0.12;
        } else {
            console.log('error');
            return;
        }
    } else if (city === 'Varna') {
        if (0 <= sales && sales <= 500) {
            percentige = 0.045;
        } else if (500 < sales && sales <= 1000) {
            percentige = 0.075;
        } else if (1000 < sales && sales <= 10000) {
            percentige = 0.1;
        } else if (sales > 10000) {
            percentige = 0.13;
        } else {
            console.log('error');
            return;
        }
    } else if (city === 'Plovdiv') {
        if (0 <= sales && sales <= 500) {
            percentige = 0.055;
        } else if (500 < sales && sales <= 1000) {
            percentige = 0.08;
        } else if (1000 < sales && sales <= 10000) {
            percentige = 0.12;
        } else if (sales > 10000) {
            percentige = 0.145;
        } else {
            console.log('error');
            return;
        }
    } else {
        console.log('error');
        return;
    }

    const commision = percentige * sales
    console.log(commision.toFixed(2));
}

commision(["Sofia", "1500"]);
commision(["Plovdiv", "499.99"]);
commision(["Varna", "3874.50"]);
commision(["Kaspichan", "-50"]);