function diamand(input) {
    const num = Number(input[0]);

    let diamUp = 0;
    let minusEven = 2;
    let minusOdd = 1;
    let extEven = 2;

    if (num % 2 === 0) {
        console.log(`${'-'.repeat(num / 2 - 1)}**${'-'.repeat(num / 2 - 1)}`);
    } else {
        console.log(`${'-'.repeat(Math.floor(num / 2))}*${'-'.repeat(Math.floor(num / 2))}`);
    }

    while (diamUp < Math.ceil(num / 2) - 1) {
        if (num % 2 === 0) {
            console.log(`${'-'.repeat(Math.max(num / 2 - extEven, 0))}*${'-'.repeat(minusEven)}*${'-'.repeat(Math.max(num / 2 - extEven, 0))}`);

            extEven++;
            minusEven += 2;

        } else {
            console.log(`${'-'.repeat(Math.floor(num / 3) - diamUp)}*${'-'.repeat(minusOdd)}*${'-'.repeat(Math.floor(num / 3) - diamUp)}`);

            minusOdd += 2;

        }
        diamUp++;
    }

    let diamDown = 0;
    let minus2Odd = Math.ceil(num / 2);
    let minMidOdd = Math.round(num / 2);
    let minusUp = 1;

    while (diamDown < Math.floor(num / 2) - 1) {
        if (num % 2 === 0) {



        } else {
            console.log(`${'-'.repeat(minusUp)}*${'-'.repeat(num - 2 * minusUp - 2)}*${'-'.repeat(minusUp)}`);

            minusUp++;
            minMidOdd -= 2;
            minus2Odd -= 2
        }
        diamDown++;
    }
    if (num % 2 === 0) {
        console.log(`${'-'.repeat(num / 2 - 1)}**${'-'.repeat(num / 2 - 1)}`);
    } else {
        console.log(`${'-'.repeat(Math.floor(num / 2))}*${'-'.repeat(Math.floor(num / 2))}`);
    }
}
diamand(['3']);