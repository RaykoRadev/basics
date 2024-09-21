function suitcasesLoad(input) {
    let volumeCargoZone = Number(input.shift());

    let countSuitcases = 0;
    let volume = '';

    while (input.length > 0) {
        volume = input.shift();

        if (volume === 'End') {
            break;
        }

        if (countSuitcases === 2) {
            volume *= 1.1;
        }

        volumeCargoZone -= volume;

        if (volumeCargoZone < 0) {
            break;
        }
        countSuitcases++;
    }

    if (volumeCargoZone >= 0) {
        console.log('Congratulations! All suitcases are loaded!');
    } else {
        console.log('No more space!');
    }
    console.log(`Statistic: ${countSuitcases} suitcases loaded.`);
}
suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);