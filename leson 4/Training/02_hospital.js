function hospital(input) {
    const time = Number(input[0]);

    let checkedPatients = 0;
    let uncheckedPatients = 0;
    let doctors = 7;
    let patients = 0;

    for (let day = 0; day <= time - 1; day++) {
        patients = Number(input[day + 1])

        if ([day + 1] % 3 === 0) {

            if (checkedPatients < uncheckedPatients) {
                doctors++;
            }

        }
        if (patients >= doctors) {
            checkedPatients += doctors;
            uncheckedPatients += patients - doctors;
        } else {
            checkedPatients += patients;

        }
    }

    console.log(`Treated patients: ${checkedPatients}.`);
    console.log(`Untreated patients: ${uncheckedPatients}.`);


}
hospital([4, 7, 27, 9, 1]);
hospital([6, 25, 25, 25, 25, 25, 2]);