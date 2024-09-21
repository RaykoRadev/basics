function shopping(input) {
    const budget = Number(input[0]);
    const gpuCount = Number(input[1]);
    const cpuCount = Number(input[2]);
    const ramCount = Number(input[3]);

    const gpuPrice = gpuCount * 250;
    const cpuPrice = gpuPrice * 0.35 * cpuCount;
    const ramPrice = gpuPrice * 0.1 * ramCount;

    let fullPrice = gpuPrice + cpuPrice + ramPrice;

    if (gpuCount > cpuCount) {
        fullPrice = fullPrice - fullPrice * 0.15;
    }

    if (budget < fullPrice) {
        console.log(`Not enough money! You need ${(fullPrice - budget).toFixed(2)} leva more!`);
    } else {
        console.log(`You have ${(budget - fullPrice).toFixed(2)} leva left!`);
    }
}

shopping(["900",    "2",    "1",    "3"])    ;
shopping(["920.45",    "3",    "1",    "1"])    ;