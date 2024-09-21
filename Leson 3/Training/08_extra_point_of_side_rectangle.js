function pointOfSide(input) {
    const x1 = Number(input[0]);
    const y1 = Number(input[1]);
    const x2 = Number(input[2]);
    const y2 = Number(input[3]);
    const x = Number(input[4]);
    const y = Number(input[5]);


    if (((x === x1 || x === x2) && (y1 < y && y <= y2)) || ((y === y1 || y === y2) && (x1 < x && x <= x2))) {
        console.log('Border');
    } else {
        if ((x < x1 || x > x2) || (y < y1 || y > y2)) {
            console.log('Outside');
        } else {
            console.log('Inside');
        }
    }


}

pointOfSide([2, -3, 12, 3, 8, -1]);
pointOfSide([2, -3, 12, 3, 12, -1]);