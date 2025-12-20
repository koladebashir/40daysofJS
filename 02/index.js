// Assignment Day 02

let name = "John Doe",
    age = 34,
    isStudentStatus = true,
    favouriteProgrammingLanguage = "JavaScript";

// working with reassignment of let and const variable specifiers
let accountBalance = 1000000;

accountBalance = 50000000;

const genotype = "AS";

// genotype = "AA"; This errored - Uncaught TypeError: Assignment to constant variable

// create an object and an array, assign them to new variables and observe changes

// start with the object
let obj = {
    name: "A simple object",
    lifespan: 2
};

let obj2 = obj;

console.log(obj2 === obj);

obj2.lifespan = 10;

obj2 = {
    name: "A second object",
    lifespan: 100
}; // this reassignes don't forget

console.log(obj);