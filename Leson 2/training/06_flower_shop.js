function flowers(input) {
    // Магнолии – 3.25 лева
	// Зюмбюли – 4 лева
	// Рози – 3.50 лева
	// Кактуси – 8 лева

    const magnolii = Number(input[0]);
    const zumbul = Number(input[1]);
    const roses = Number(input[2]);
    const cactuses = Number(input[3]);
    const giftPrice = Number(input[4]);

    let totalPurcase = magnolii * 3.25 + zumbul * 4 + roses * 3.50 + cactuses * 8;
    totalPurcase = totalPurcase - totalPurcase * 0.05;

    if (totalPurcase >= giftPrice) {
        console.log(`She is left with ${Math.floor(totalPurcase - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalPurcase)} leva.`);
    }
}

flowers([2, 3, 5, 1, 50,]);
flowers([15, 7, 5, 10, 100]);