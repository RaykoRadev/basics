function highJump(input) {
    const target = Number(input[0]);

    let counter = 0;
    let startingPoint = target - 30;
    let nextStep = 5;
    let index = 1;
    let high = Number(input[index]);

    while (index < input.length) {
        let negativCounter = 0;

        for (let jump = 1; jump <= 3; jump++) {
            counter++;
            if (startingPoint < high) {
                startingPoint += nextStep;
                break;
            } else {
                negativCounter++;
                if (negativCounter === 3) {
                    return console.log(`Tihomir failed at ${startingPoint}cm after ${counter} jumps.`);
                }
                high = input[++index];
            }
        }
        high = input[++index];
    }

    console.log(`Tihomir succeeded, he jumped over ${target}cm after ${counter} jumps.`);
}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235.5"]);