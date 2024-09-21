function highJump(input) {

    const target = Number(input[0]);
    let failJump = 0;
    let curentHigh = target - 30;
    let index = 0;
    let counter = 0;

    while (target >= curentHigh) {
        index++;
        let curentJump = input[index];

        if (failJump === 3) {
            console.log(`Tihomir failed at ${curentHigh}cm after ${counter} jumps.`);
            return;
        }

        counter++;

        if (curentJump <= curentHigh) {
            failJump++;
            continue;
        } else {
            failJump = 0;
            curentHigh += 5
        }
    }

    console.log(`Tihomir succeeded, he jumped over ${target}cm after ${counter} jumps.`);
}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);