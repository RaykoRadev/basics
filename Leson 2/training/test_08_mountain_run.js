function mountainRun(input) {
    const recordsInSec = Number(input[0]);
    const distaceInMeters = Number(input[1]);
    const timeForOneMeterInSec = Number(input[2]);

    const resistanceTime = Math.floor(distaceInMeters / 50) * 30;   

    const neededTime = distaceInMeters * timeForOneMeterInSec + resistanceTime;

    if (neededTime < recordsInSec) {
        console.log(`Yes! The new record is ${(neededTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(neededTime - recordsInSec).toFixed(2)} seconds slower.`);
    }
}    
mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);