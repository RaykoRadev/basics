function bilding(input) {
    const floor = Number(input[0]);
    const rooms = Number(input[1]);

    for (let i = floor; i >= 1; i--) {
        let fillFloor = '';

        for (let r = 0; r < rooms; r++) {
            if (i === floor) {
                fillFloor += `L${i}${r} `;
            } else if (i % 2 === 0) {
                fillFloor += `O${i}${r} `;
            } else {
                fillFloor += `A${i}${r} `;
            }
        }
        console.log(fillFloor);
    }
}
bilding(["6", "4"]);
bilding(["9", "5"]);
bilding(["4", "4"]);