function shootingDay(input) {
    const timeforShooting = Number(input[0]);
    const numberScenes = Number(input[1]);
    const timeforOneScene = Number(input[2]);

    const preparationTime = timeforShooting * 0.15;
    const allScenesTime = numberScenes * timeforOneScene;
    const allNeededTime = preparationTime + allScenesTime;

    if (timeforShooting >= allNeededTime) {
        console.log(`You managed to finish the movie on time! You have ${(timeforShooting - allNeededTime).toFixed(0)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${(allNeededTime - timeforShooting).toFixed(0)} minutes.`);
    }
}

shootingDay(["120", "10", "11"]);
shootingDay(["60", "15", "3"]);