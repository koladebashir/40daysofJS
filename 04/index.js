// ATM cash withdrawal system

let withdrawalAmount = 1200;

if (withdrawalAmount % 100 == 0) {
    console.log("Withdrawal Successful");
} else {
    console.log("Invalid Amount");
}

// Simple Calculator

const operator = "*";
const op1 = 2;
const op2 = 3;

switch (operator) {
    case "+":
        console.log(op1 + op2);
        break;
    case "-":
        console.log(op1 - op2);
        break;
    case "*":
        console.log(op1 * op2);
        break;
    case "/":
        console.log(op1 / op2);
        break;
    case "%":
        console.log(op1 % op2);
        break;
}

// Pay for tickets

const age = 100;

if (age <= 18) {
    console.log("Children Ticket: $3");
} else if (age <= 60) {
    console.log("Adult Ticket: $10");
} else {
    console.log("Senior Ticket: $8");
}

// Zodiac signs

let month = "Jan";

switch (month) {
    case "Jan":
        console.log("Capricorn");
        console.log("Aquarius");
        break
    case "Feb":
        console.log("Aquarius");
        console.log("Pisces");
        break;
    case "Mar":
        console.log("Pisces");
        console.log("Aries");
        break;
    case "Apr":
        console.log("Aries");
        console.log("Taurus");
        break;
    case "May":
        console.log("Taurus");
        console.log("Gemini");
        break;
    case "Jun":
        console.log("Gemini");
        console.log("Cancer");
        break;
    case "Jul":
        console.log("Cancer");
        console.log("Leo");
        break;
    case "Aug":
        console.log("Leo");
        console.log("Virgo");
        break;
    case "Sep":
        console.log("Virgo");
        console.log("Libra");
        break;
    case "Oct":
        console.log("Libra");
        console.log("Scorpio");
        break;
    case "Nov":
        console.log("Scorpio");
        console.log("Saggitarius");
        break;
    case "Dec":
        console.log("Saggitarius");
        console.log("Capricorn");
        break;
    default:
        console.log("Invalid month literal");
}

// Triangle Classifier

const a = 1;
const b = 10;
const c = 12;

if (a == b && a == c) {
    console.log("Triangle: Equilateral");
} else if (a == b || a == c) {
    console.log("Triangle: Isosceles");
} else {
    console.log("Triangle: Scalene");
}