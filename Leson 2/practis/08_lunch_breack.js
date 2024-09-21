function lunchBreack(input) {
    const name = input[0];
    const episodeDuration = Number(input[1]);
    const breackDuration = Number(input[2]);

    const eatingTime = 1 / 8 * breackDuration;
    const relaxTime = 1 / 4 * breackDuration;
    const neededTime = breackDuration - eatingTime - relaxTime;

    if (episodeDuration <= neededTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(neededTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - neededTime)} more minutes.`);
    }
}

lunchBreack(["Game of Thrones",    "60",    "96"])    ;
lunchBreack(["Teen Wolf",    "48",    "60"])    ;