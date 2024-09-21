function numberInRange(input) {
    const number = Number(input[0]);

    if (((-100 <= number && number < 0) || (0 < number && number <= 100)) && number != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }

}

numberInRange(["-25"]);
numberInRange(["0"]);
numberInRange(["25"]);
numberInRange(["100"]);
numberInRange(["-65"]);
numberInRange(["-142"]);
numberInRange(["200"]);
numberInRange(["0.9"]);
