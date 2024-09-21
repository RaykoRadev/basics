function worldRecord(input) {
    const recordInsecunds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeforMeter = Number(input[2]);

    let swimmingtime = distanceInMeters * timeforMeter;
    const waterressitance = Math.floor(distanceInMeters / 15) * 12.5;
    swimmingtime += waterressitance;

    if (swimmingtime < recordInsecunds) {
        console.log(`Yes, he succeeded! The new world record is ${(swimmingtime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(swimmingtime - recordInsecunds).toFixed(2)} seconds slower.`);
    }
}

worldRecord(["10464",    "1500",    "20"]);
worldRecord(["55555.67",    "3017",    "5.03"]);
    