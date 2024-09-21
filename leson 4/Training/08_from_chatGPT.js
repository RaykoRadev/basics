function processPairs(input) {
    // Прочитане на броя на двойките
    const n = +input[0];  // Преобразуване към число чрез унарния оператор +

    let prevSum = null;
    let maxDiff = 0;
    let allEqual = true;

    for (let i = 1; i < 2 * n; i += 2) {
        const num1 = +input[i];    // Преобразуване към число чрез унарния оператор +
        const num2 = +input[i + 1];  // Преобразуване към число чрез унарния оператор +
        const currentSum = num1 + num2;

        if (prevSum !== null) {
            const diff = Math.abs(currentSum - prevSum);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
            if (currentSum !== prevSum) {
                allEqual = false;
            }
        }
        prevSum = currentSum;
    }

    if (allEqual) {
        console.log(`Yes, value=${prevSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
processPairs([3, 1, 2, 0, 3, 4, -1]);