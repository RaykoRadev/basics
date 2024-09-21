function pool(input) {
    const volumePool = Number(input[0]);
    const firstPipeForHour = Number(input[1]);
    const secondPipeForHour = Number(input[2]);
    const hoursWithoutWorker = Number(input[3]);

    const p1TotalWork = firstPipeForHour * hoursWithoutWorker;
    const p2totalWork = secondPipeForHour * hoursWithoutWorker;
    const totalLitres = p1TotalWork + p2totalWork;

    if (volumePool > totalLitres) {
       const volumePercent = totalLitres / volumePool * 100;
       const pipeOnePercent = p1TotalWork / totalLitres * 100;
       const pipeTwoPercent = 100 - pipeOnePercent
        console.log(`The pool is ${volumePercent}% full. Pipe 1: ${pipeOnePercent.toFixed(2)}%. Pipe 2: ${pipeTwoPercent.toFixed(2)}%.`);
    } else {
        console.log(`For ${hoursWithoutWorker} hours the pool overflows with ${(totalLitres - volumePool).toFixed(2)} liters.`);
    }
}

pool([1000, 100, 120, 3]);
pool([100, 100, 100, 2.5]);