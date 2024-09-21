function cake(input) {
    const length = Number(input[0]);
    const weight = Number(input[1]);

    let cakeSize = length * weight;
    let pieces = 2;
    let piecesCake = '';

    while (cakeSize >= 0) {
        piecesCake = input[pieces]
        if (piecesCake === 'STOP') {
            break
        }
        cakeSize -= piecesCake;
        pieces++;

    }
    if (piecesCake === 'STOP') {
        console.log(`${cakeSize} pieces are left.`);
    } else if (cakeSize < 0) {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    }
}
// cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);