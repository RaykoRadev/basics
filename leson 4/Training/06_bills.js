function bills(input) {
    const months = Number(input[0]);

    let electricity = 0;
    let bill = 0;
    let other = 0;

    for (let bills = 0; bills <= months - 1; bills++) {
        bill = Number(input[bills + 1]);

        electricity += bill;
        other += (bill + 20 + 15) * 1.2;
    }

    const water = months * 20;
    const internet = months * 15;
    const avarage = (water + internet + electricity + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${avarage.toFixed(2)} lv`);
}

bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
bills([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);