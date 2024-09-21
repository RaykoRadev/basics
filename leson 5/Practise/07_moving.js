function moving(input) {
    const length = Number(input[0]);
    const weight = Number(input[1]);
    const height = Number(input[2]);

    let totalFreeSpace = length * weight * height;
    let boxes = 3;
    let amountBoxes = '';

    while (totalFreeSpace >= 0) {
        amountBoxes = input[boxes];

        if (amountBoxes === 'Done') {
            break;
        }
        totalFreeSpace -= amountBoxes;

        boxes++;
    }
    if (amountBoxes === 'Done') {
        console.log(`${totalFreeSpace} Cubic meters left.`);
    } else if (totalFreeSpace < 0) {
        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);