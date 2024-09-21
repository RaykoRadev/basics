function grades(input) {
    const studentsNumber = Number(input[0]);

    let step = 0;
    let sumEvaluation = 0;
    let e2 = 0;
    let e3 = 0;
    let e4 = 0;
    let e5 = 0;

    for (let evaluation = 0; evaluation <= studentsNumber - 1; evaluation++) {
        step = Number(input[evaluation + 1]);

        if (step >= 5) {
            e5++;
            sumEvaluation += step;
        } else if (step >= 4) {
            e4++;
            sumEvaluation += step;
        } else if (step >= 3) {
            e3++;
            sumEvaluation += step;
        } else if (step < 3) {
            e2++;
            sumEvaluation += step;
        }
    }

    const e2Percentage = (e2 / studentsNumber * 100).toFixed(2);
    const e3Percentage = (e3 / studentsNumber * 100).toFixed(2);
    const e4Percentage = (e4 / studentsNumber * 100).toFixed(2);
    const e5Percentage = (e5 / studentsNumber * 100).toFixed(2);

    const avarageEvaluation = (sumEvaluation / studentsNumber).toFixed(2);

    console.log(`Top students: ${e5Percentage}%`);
    console.log(`Between 4.00 and 4.99: ${e4Percentage}%`);
    console.log(`Between 3.00 and 3.99: ${e3Percentage}%`);
    console.log(`Fail: ${e2Percentage}%`);
    console.log(`Average: ${avarageEvaluation}`);

}

grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);
grades([6, 2, 3, 4, 5, 6, 2.2]);