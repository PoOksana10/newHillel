let user_year = parseInt(prompt("Please input your year of birth").trim());
console.log(user_year);


let city = prompt("Please input the city of birth").toLowerCase().trim();
console.log(city);


let sport = prompt("Please input your favourite type of sport").toLowerCase().trim();
console.log(sport);

let current_date = new Date()
let current_year = current_date.getFullYear()

let age = parseInt(current_year - user_year)

const sport_1 = "football";
const sport_2 = "basketball";
const sport_3 = "hokey";

const champion_1 = "Andriy Shevchenko";
const champion_2 = "Michael Jordan";
const champion_3 = "Connor McDavid";

let outlet

if (city) {
    if (city === "kyiv") {
        let result = "You live in the Ukraine!";
        if (age) {
            outlet = "Your age is" + " " + age + "! " + result;
        } else {
            outlet = "We did not get your age... " + " " + result;
        }
    } else if (city === "london") {
        let result = "You live in the United Kingdom!";
        if (age) {
            outlet = "Your age is" + " " + age + "! " + result;
        } else {
            outlet = "We did not get your age... " + " " + result;
        }
    } else if (city === "washington") {
        let result = "You live in the USA!";
        if (age) {
            outlet = "Your age is" + " " + age + "! " + result;
        } else {
            outlet = "We did not get your age... " + " " + result;
        }
    } else {
        let result = "You live in the" + " " + city.toUpperCase() + "!";
        if (age) {
            outlet = "Your age is" + " " + age + "! " + result;
        } else {
            outlet = "We did not get your age... " + " " + result;
        }
    }
} else {
    if (age) {
        outlet = 'No city - did you forget one? 😁 You are' + " " + age + ", so you could do better!"
    } else {
        outlet = "No city - did you forget one? 😁 No age ? Try to make some entries! It's not fun!"
    }
}


if (sport) {
    if (sport === sport_1) {
        alert(outlet + " " + "Awesome, you want to be like" + " " + champion_1 + "!");
    } else if (sport === sport_2) {
        alert(outlet + " " + "Awesome, you want to be like" + " " + champion_2 + "!");
    } else if (sport === sport_3) {
        alert(outlet + " " + "Awesome, you want to be like" + " " + champion_3 + "!");
    } else {
        alert(outlet + " " + "Your favourite sport is" + " " + sport);
    }
} else {
    alert(outlet + " " + 'It seems like you did not input any sport .. try to think and come back to us again...!')
}
