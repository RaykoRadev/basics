function minmalNumber(input) {
    let minNum = Number.POSITIVE_INFINITY;

    while (input.length > 0) {
        let num = input.shift();

        if (num === 'Stop') {
            break;
        }
        if (Number(num) < minNum) {
            minNum = Number(num);
        }
    }

    console.log(minNum);
}
minmalNumber(["100", "99", "80", "70", "Stop"]);
minmalNumber(["-10", "20", "-30", "Stop"]);
minmalNumber(["45", "-20", "7", "99", "Stop"]);
minmalNumber(["999", "Stop"]);
minmalNumber(["-1", "-2", "Stop"]);