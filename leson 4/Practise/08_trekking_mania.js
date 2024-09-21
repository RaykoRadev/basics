function trekkingMania(input) {
    const groupsNumber = Number(input[0]);

    let m1 = 0;
    let m2 = 0;
    let m3 = 0;
    let m4 = 0;
    let m5 = 0;

    let totalPeople = 0;

    for (let group = 0; group <= groupsNumber - 1; group++) {
        let people = input[group + 1];

        if (people <= 5) {

            m1 += Number(people);
        } else if (people <= 12) {
            m2 += Number(people);
        } else if (people <= 25) {
            m3 += Number(people);
        } else if (people <= 40) {
            m4 += Number(people);
        } else {
            m5 += Number(people);
        }
    }
    totalPeople = m1 + m2 + m3 + m4 + m5;

    console.log(`${(m1 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(m2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(m3 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(m4 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(m5 / totalPeople * 100).toFixed(2)}%`);


}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);