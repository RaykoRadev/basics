function weddingSeats(input) {
    const lastSector = input[0].charCodeAt();
    const rows1sector = Number(input[1]);
    const sitsOddRow = Number(input[2]);
    const firstSector = 'A'.charCodeAt();
    const firstSeat = 'a'.charCodeAt();

    let sector = 0;
    let row = 0;
    let sit = 0;
    let counter = 0;

    let letterC = '';
    let letterL = '';
    let rowCounter = 0;

    for (let i = firstSector; i <= lastSector; i++) {
        sector = i;
        letterC = String.fromCharCode(i);

        for (let j = 1; j <= rows1sector + rowCounter; j++) {
            row = j;

            if (row % 2 === 0) {
                for (let k = firstSeat; k < sitsOddRow + firstSeat + 2; k++) {
                    sit = k;
                    letterL = String.fromCharCode(k);
                    console.log(`${letterC}${row}${letterL}`);
                    counter++;
                }

            } else {
                for (let k = firstSeat; k < sitsOddRow + firstSeat; k++) {
                    sit = k;
                    letterL = String.fromCharCode(k);
                    console.log(`${letterC}${row}${letterL}`);
                    counter++;
                }
            }
        }
        rowCounter++;
    }
    console.log(counter);

}
weddingSeats(['B', '3', '2']);