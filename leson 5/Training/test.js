
function passThePillow([n, time]) {
    let person = 1;
    let flow = 2;
    let negativFlow = -1;
    let currentTime = 0;
    while (currentTime < time) {
        if (flow + person > 0 && person + flow <= n) {
            person++;
            flow++;
        } else {
            flow *= -1;
        }
        currentTime++;
    }
    console.log(person);
}
passThePillow([4, 5]);