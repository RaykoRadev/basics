function maxNumber(input) {
    let maxNum = Number.NEGATIVE_INFINITY;

    while (input.length > 0) {
        let num = input.shift();

        if (num === 'Stop') {
            break;
        }

        if (Number(num) > maxNum) {
            maxNum = num;
        }
    }
    console.log(maxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);