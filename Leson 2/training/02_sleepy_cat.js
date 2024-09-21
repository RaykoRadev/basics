function sleepyTom(input) {
    const TOMS_MAX_PLAY_TIME_PER_YEAR = 30000
    
    const holidayDays = Number(input[0]);

    const workingDays = 365 - holidayDays; // 1 year = 365 days
    const holidayPlyTime = holidayDays * 127; // 127 min plaing per holiday day
    const workingPlaytime = workingDays * 63; // 63 min plaing per working day

    const totalPLayTime = workingPlaytime + holidayPlyTime;

    if (totalPLayTime >TOMS_MAX_PLAY_TIME_PER_YEAR) {
        const extraPlayTime = totalPLayTime - TOMS_MAX_PLAY_TIME_PER_YEAR;
        const hours = Math.floor(extraPlayTime / 60);
        const minutes = extraPlayTime % 60;
        
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        const playTime = TOMS_MAX_PLAY_TIME_PER_YEAR - totalPLayTime;
        const hours = Math.floor(playTime / 60);
        const minutes =  playTime % 60;

        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }


}

sleepyTom([20]);
sleepyTom([113]);