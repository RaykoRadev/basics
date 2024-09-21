// variant 1:

// function fitnessCenter(input) {
//     const totalPeople = Number(input[0]);

//     let step = 1;
//     let back = 0;
//     let chest = 0;
//     let legs = 0;
//     let abs = 0;
//     let pShake = 0;
//     let pBar = 0;

//     while (step <= totalPeople) {
//         let activity = input[step];

//         if (activity === 'Back') {
//             back++;
//         } else if (activity === 'Chest') {
//             chest++;
//         } else if (activity === 'Legs') {
//             legs++;
//         } else if (activity === 'Abs') {
//             abs++;
//         } else if (activity === 'Protein shake') {
//             pShake++;
//         } else if (activity === 'Protein bar') {
//             pBar++;
//         }

//         step++;
//     }

//     console.log(`${back} - back`);
//     console.log(`${chest} - chest`);
//     console.log(`${legs} - legs`);
//     console.log(`${abs} - abs`);
//     console.log(`${pShake} - protein shake`);
//     console.log(`${pBar} - protein bar`);
//     console.log(`${((back + chest + legs + abs) / totalPeople * 100).toFixed(2)}% - work out`);
//     console.log(`${((pBar + pShake) / totalPeople * 100).toFixed(2)}% - protein`);
// }

// variant 2:

function fitnessCenter(input) {
    const visitors = Number(input[0]);

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    for (i = 1; i <= visitors; i++) {
        let activity = input[i];

        switch (activity) {
            case 'Back':
                backCount++;
                break;
            case "Chest":
                chestCount++;
                break;
            case "Legs":
                legsCount++;
                break;
            case "Abs":
                absCount++;
                break;
            case "Protein shake":
                proteinShakeCount++
                break;
            case "Protein bar":
                proteinBarCount++;
                break;

        }
    }

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);
    console.log(`${((backCount + chestCount + legsCount + absCount) / visitors * 100).toFixed(2)}% - work out`);
    console.log(`${((proteinShakeCount + proteinBarCount) / visitors * 100).toFixed(2)}% - protein`);
}

fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
fitnessCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);