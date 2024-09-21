function harvest(input) {
    const PERCENT_HARVEST_FOR_WINE = 0.40;
    const NEEDED_GRAPE_FOR_ONE_LITER_WINE = 2.5;
    
    const sizeField = Number(input[0]);
    const grapeForSquareMeter = Number(input[1]);
    const neededLitresWine = Number(input[2]);
    const amountWorkers = Number(input[3]);
    
    const grapeForWine = sizeField * grapeForSquareMeter * PERCENT_HARVEST_FOR_WINE;
    const litersOfWine = grapeForWine / NEEDED_GRAPE_FOR_ONE_LITER_WINE;

    if (litersOfWine >= neededLitresWine) {
        const leftWine = litersOfWine - neededLitresWine;
        const winePerWorker = Math.ceil(leftWine / amountWorkers);

        console.log(`Good harvest this year! Total wine: ${litersOfWine} liters.`);
        console.log(`${leftWine} liters left -> ${winePerWorker} liters per person.`);
    } else {
        const neededMoreWine = Math.floor(neededLitresWine - litersOfWine);

        console.log(`It will be a tough winter! More ${neededMoreWine} liters wine needed.`);
    }
}

harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);