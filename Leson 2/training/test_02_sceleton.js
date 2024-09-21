function sceleton(input) {

    const minControla = Number(input[0]);
    const secControla = Number(input[1]);
    const leightInMeters = Number(input[2]);
    const secFor100Meters = Number(input[3]);

    const timeInSec = minControla * 60 + secControla;
    let newTime = leightInMeters / 100 * secFor100Meters;
    const resistansTime = leightInMeters / 120 * 2.5
    newTime = newTime - resistansTime;

    if (newTime <= timeInSec) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${newTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(newTime - timeInSec).toFixed(3)} second slower.`);
    }
}

sceleton(["2", "12", "1200", "10"]);
sceleton(["1", "20", "1546", "12"]);
    
    