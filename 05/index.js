// Create a Tree

for (let i = 0; i < 5; i++) {
    let symbol = "";
    for (let j = 0; j <= i; j++) {
        symbol += "*";
    }
    console.log(symbol);
}

// Multiplication table

const N = 12;

for (let i = 0; i < 12; i++) {
    console.log(`${N} * ${i + 1} = ${N * (i + 1)}`);
}

// Summation of odd numbers 1 - 500
let sum = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);

// Skip multiples of 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// Reverse digits

let num = 6789;
let reverseNumber = 0;
while (num > 0) {
    // get the last digit
    const lastDigit = num % 10;

    // shift the existing reversed number to the right and add the last digit 
    reverseNumber = (reverseNumber * 10) + lastDigit;

    num = (num / 10) | 0;
}
console.log(reverseNumber);