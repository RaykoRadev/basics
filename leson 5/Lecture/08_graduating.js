function graduating(input) {
    const name = input.shift();
    let grade = 1;
    let totalEvaluation = 0;
    let failt = 0;

    while (input.length > 0) {
        let evaluation = Number(input.shift());

        if (evaluation < 4) {
            failt++;

            if (failt === 2) {
                break;
            } else {
                continue;
            }
        }
        grade++;
        totalEvaluation += evaluation;
    }
    if (failt === 2) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(totalEvaluation / 12).toFixed(2)}`);
    }
}

graduating(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduating(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);