let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

function parent() {
    let variable = "parent";

    function child() {
        console.log(variable);
    }

    child();
}

function test() {

    for (var i = 0; ;) {
        break;
    }

    console.log(i);
}

// var is function scoped
// let and const are block scoped

function owner() {
    let variable = "owners_variable";
}

function theif() {
    console.log(`trying to take owners variable ${variable}`);
}

// theif();

// console.log(a);
// let a = 10;

function showAge() {
    var age = 25;
    console.log(age);
}

for (var age = 1; ;) {
    break
}

console.log(age);

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
