function trainers(input) {
    const people = Number(input[0]);

    let index = 1;
    let counter = 0;
    let totalGrade = 0;

    while (input[index] !== 'Finish') {
        let name = input[index];
        let totalSUm = 0;

        for (let i = 1; i <= people; i++) {
            let evaluation = Number(input[index + i]);
            totalSUm += evaluation;
        }
        console.log(`${name} - ${(totalSUm / people).toFixed(2)}.`);

        totalGrade += totalSUm
        counter++;
        index += people + 1;
    }

    console.log(`Student's final assessment is ${(totalGrade / (counter * people)).toFixed(2)}.`);

}
trainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);