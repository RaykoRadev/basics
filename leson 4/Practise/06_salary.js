function salaryInTheEnd(input) {
    const tabs = Number(input[0]);
    let salary = Number(input[1]);

    //et cutOff = 0;

    for (let tab = 0; tab <= tabs && salary > 0; tab++) {
        openTab = input[2 + tab];

        if (openTab === 'Facebook') {
            salary -= 150;
        } else if (openTab === 'Instagram') {
            salary -= 100;
        } else if (openTab === 'Reddit') {
            salary -= 50;
        }
    }

    if (salary > 0) {
        console.log(salary);
    } else {
        console.log('You have lost your salary.');
    }


}

salaryInTheEnd(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salaryInTheEnd(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salaryInTheEnd(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);    