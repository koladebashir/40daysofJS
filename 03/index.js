// learnt about operators

console.log(122232434 % 2 == 0);

let age = 12;
console.log(age >= 18 ? "eligible" : "ineligible");

// calculate CTC earning

const monthlySalary = 12300;
const annualSalary = monthlySalary * 12
const totalAnnualPlusBonus = 1.2 * annualSalary;
console.log(`${totalAnnualPlusBonus} rupees`);


// Traffic light simulation

let color = "green";

console.log(color === "green" ? "Go!" : "Stop");

// Calculate utility bill p/m and annually

let unitsPerDay = 43;
const daysInMonth = 30;
const ChargePerUnit = 150;
const monthsInYear = 12;
const discount = 0.8;

console.log(`-- Utility Bill --`);
console.log(`Monthly Charge: ${unitsPerDay * daysInMonth * ChargePerUnit} rupees`);
console.log(`Annual Charge: ${unitsPerDay * daysInMonth * ChargePerUnit * monthsInYear * discount} rupees`);

// Checks leap year
console.log("-- Checks for leap year --");
console.log(2025 % 4 == 0 ? "Leap Year" : "Non Leap Year");

// Find max out of three

const p = 2000, q = 200, r = 45;

console.log(p > q && p > r ? p : (q > r ? q : r));

// Bitwise doubling

let count = 5;

console.log(3 << 1);