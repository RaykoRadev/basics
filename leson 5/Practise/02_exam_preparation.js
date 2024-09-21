function exam(input) {
    const lowEvaluation = Number(input.shift());

    let badEv = 0;
    let sumEv = 0;
    let countProblems = 0;
    let problem = '';
    let lastProblem = '';

    while (input.length > 0) {
        problem = input.shift();
        let evaliation = Number(input.shift());

        if (problem === 'Enough') {
            break;
        }
        if (evaliation <= 4) {
            badEv++;
            if (badEv === lowEvaluation) {
                break;
            }
        }
        countProblems++;
        sumEv += evaliation;
        lastProblem = problem;
    }
    if (problem === 'Enough') {
        console.log(`Average score: ${(sumEv / countProblems).toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${badEv} poor grades.`);
    }
}
exam(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);