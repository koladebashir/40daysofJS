// Fahrenheit Calculator

function toFahrenheit(celcius) {
    return `${(celcius * 9 / 5) + 32}F`;
}

console.log(toFahrenheit(23));

// Find Max between 2 numbers

function maximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maximum(12, -3));
console.log(maximum(0, 0));

// Palindrome

function isPalindrome(str) {
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr === str;
}

console.log(isPalindrome("tat"))

// Factorial

function factorial(n) {
    let result = 1;
    if (n === 0) return 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(1));

// Count Vowels

function countVowel(str) {
    let len = str.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        let char = str[i];

        switch (char) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                count += 1;
        }
    }

    return count;
}

console.log("adamiou:", countVowel("adamiou"));

// Capitalize first letter of word in sentence

function capitalizeWords(sentence) {
    if (sentence.length === 0) return "";

    let space = " ";
    let encounteredSpace = false;
    let newSentence = sentence[0].toUpperCase();

    for (let i = 1; i < sentence.length; i++) {
        if (sentence[i] === space) {
            newSentence += " ";
            encounteredSpace = true;
            continue;
        }
        if (encounteredSpace) {
            encounteredSpace = false;
            newSentence += sentence[i].toUpperCase();
        } else {
            newSentence += sentence[i];
        }
    }

    return newSentence;
}

console.log(capitalizeWords("this is a sample"));

// Hello JavaScript

(function () {
    console.log("Hello JavaScript!");
})();

// callback functions

function greet(name, callback) {
    callback(name); // Note - normally callbacks are invoked based on certain criteria
}

greet("ire", (name) => {
    console.log(`Hello ${name}`);
});