function workingTime(input) {
    const time = Number(input[0]);
    const day = input[1];

    if (day === 'Sunday' || !(time >= 10 && time <= 18)) {
        console.log('closed');

    } else {
        console.log('open');
    }


}

workingTime(["11", "Monday"]);
workingTime(["19", "Friday"]);
workingTime(["11", "Sunday"]);