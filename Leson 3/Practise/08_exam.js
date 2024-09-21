function exam(input) {
    const hourExam = Number(input[0]);
    const minutesExam = Number(input[1]);
    const hourArriving = Number(input[2]);
    const minutesArriving = Number(input[3]);

    const totalMinExam = hourExam * 60 + minutesExam;
    const totalMinArriving = hourArriving * 60 + minutesArriving;

    let diffrence = 0;

    if (totalMinArriving === totalMinExam) {
        console.log('On time');
        return;

    } else {
        diffrence = totalMinArriving - totalMinExam;
        const absDiffrence = Math.abs(diffrence);
        hourDifference = Math.floor(absDiffrence / 60);
        minDifference = absDiffrence % 60;

        let firsRoll = '';
        let secondRoll = '';

        if (hourDifference === 0) {
            if (diffrence > 0) {
                firsRoll = 'Late';
                secondRoll = 'after';
            } else {
                if (absDiffrence <= 30) {
                    firsRoll = 'On time'
                } else {
                    firsRoll = 'Early';
                }
                secondRoll = 'before';
            }
            console.log(`${firsRoll}`);
            console.log(`${minDifference} minutes ${secondRoll} the start`);
        } else {
            if (diffrence > 0) {
                firsRoll = 'Late';
                secondRoll = 'after';
            } else {
                firsRoll = 'Early';
                secondRoll = 'before';
            }
            console.log(`${firsRoll}`);
            console.log(`${hourDifference}:${minDifference.toString().padStart(2, '0')} hours ${secondRoll} the start`);
        }
    }

}

exam(["9", "30", "9", "50"]);
exam(["9", "00", "10", "30"]);
exam(["10", "00", "10", "00"]);
exam(["9", "00", "8", "30"]);
exam(["14", "00", "13", "55"]);
exam(["11", "30", "10", "55"]);
exam(["16", "00", "15", "00"]);
exam(["11", "30", "8", "12"]);
exam(["11", "30", "12", "29"]);



