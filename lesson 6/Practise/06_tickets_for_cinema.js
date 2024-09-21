function cinema(input) {
    let index = 0;
    let totalStudent = 0;
    let totalStandard = 0;
    let totalKid = 0;
    let totalTickets = 0;
    let ticketsForOneMovie = 0;
    let name = input[index];

    while (name !== 'Finish') {
        let capacity = Number(input[++index]);
        let studentCount = 0;
        let standardCount = 0;
        let kidCount = 0;

        for (let places = 0; places < capacity; places++) {
            let ticket = input[++index];

            if (ticket === 'End') {
                break;
            } else if (ticket === 'student') {
                studentCount++;
            } else if (ticket === 'standard') {
                standardCount++;
            } else if (ticket === 'kid') {
                kidCount++;
            }

        }
        ticketsForOneMovie = studentCount + standardCount + kidCount;

        console.log(`${name} - ${(ticketsForOneMovie / capacity * 100).toFixed(2)}% full.`);

        totalStudent += studentCount;
        totalStandard += standardCount;
        totalKid += kidCount;
        // if (++index === 'Finish') {
        //     break;
        // }
        // index += ticketsForOneMovie + 3;
        name = input[++index]
        totalTickets += ticketsForOneMovie;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudent / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKid / totalTickets * 100).toFixed(2)}% kids tickets.`);

}
// cinema(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
// cinema(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);
cinema(['Shutter Island', '9', 'standard', 'standard', 'standard', 'student', 'student', 'student', 'kid', 'kid', 'kid', 'Rush', '9', 'standard', 'standard', 'standard', 'student', 'student', 'student', 'kid', 'kid', 'kid', 'Deadpool', '9', 'standard', 'standard', 'standard', 'student', 'student', 'student', 'kid', 'kid', 'kid', 'Finish']);