function histogarm(input) {
    const amountNUmbers = Number(input[0]);
    const num = Number(input[1]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i <= amountNUmbers - 1; i++) {
        const currentNumber = input[i + 1];
        if (currentNumber < 200) {
            p1 += 1;
        } else if (currentNumber < 400) {
            p2 += 1;
        } else if (currentNumber < 600) {
            p3 += 1;
        } else if (currentNumber < 800) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }

    const percentige1 = p1 / amountNUmbers * 100;
    const percentige2 = p2 / amountNUmbers * 100;
    const percentige3 = p3 / amountNUmbers * 100;
    const percentige4 = p4 / amountNUmbers * 100;
    const percentige5 = p5 / amountNUmbers * 100;
    console.log(`${(percentige1).toFixed(2)}%`);
    console.log(`${(percentige2).toFixed(2)}%`);
    console.log(`${(percentige3).toFixed(2)}%`);
    console.log(`${(percentige4).toFixed(2)}%`);
    console.log(`${(percentige5).toFixed(2)}%`);

}

// histogarm([20, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
histogarm(["3", "1", "2", "999"]);
histogarm(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogarm(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogarm(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);