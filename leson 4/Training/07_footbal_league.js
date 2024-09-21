function football(input) {
    const maxViewers = Number(input[0]);
    const totalViewers = Number(input[1]);

    let personA = 0;
    let personB = 0;
    let personV = 0;
    let personG = 0;


    for (let step = 2; step <= totalViewers + 1; step++) {
        let viewer = input[step];

        if (viewer === 'A') {
            personA++;
        } else if (viewer === 'B') {
            personB++;
        } else if (viewer === 'V') {
            personV++;
        } else if (viewer === 'G') {
            personG++;
        }
    }
    const sectorPercentageA = (personA / totalViewers * 100).toFixed(2);
    const sectorPercentageB = (personB / totalViewers * 100).toFixed(2);
    const sectorPercentageV = (personV / totalViewers * 100).toFixed(2);
    const sectorPercentageG = (personG / totalViewers * 100).toFixed(2);
    const totalPercentage = (totalViewers / maxViewers * 100).toFixed(2);

    console.log(sectorPercentageA + '%');
    console.log(sectorPercentageB + '%');
    console.log(sectorPercentageV + '%');
    console.log(sectorPercentageG + '%');
    console.log(totalPercentage + '%');
}

// football([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
// football([93, 16, 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);
football([1000, 12, 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);