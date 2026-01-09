"use strict";
let tom = {
    name: "Tom",
    age: 7
}

let jerry = {
    name: "Jerry",
    age: 3
}

function greetMe(object) {
    object.logMessage = function () {
        console.log(`This inside ${this.name} is ${this}`);
    }
}

const food = {
    name: "mango",
    color: "yellow",

    functionProp: {
        func: () => this
    }
}

console.log(food.functionProp.func());

// explicit binding using call, apply and bind

const likes = function (hobby1, hobby2) {
    console.log(`${this.name} likes`, hobby1, "and", hobby2);
}

const person = {
    name: "tapas"
}

likes.call(person, "coding", "k-dramas");
const hobbies = ["running", "skipping"];

likes.apply(person, hobbies);

const getDesc = function () {
    console.log(`
        -- object start --
        name: ${this.name}
         -- object end --`);
}

const skippy = {
    name: "skippy"
}

const up = getDesc.bind(skippy);

up();

// exercise 5

function Sport(name, noOfPlayers) {
    this.name = name;
    this.noOfPlayers = noOfPlayers;
}

function logSport(sport) {
    console.log(`
        -- sport info --
        name: ${this.name}
        number of players: ${this.noOfPlayers}
        -- sport info --
        `);
}

const chelsea = new Sport("Chelsea", 12);
const lakers = new Sport("Lakers", 8);

logSport.call(chelsea);
logSport.call(lakers);

const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    },
};

const car2 = {
    brand: "BMW",
    model: "X1",
};

const desc = car1.describe
const fn = desc.bind(car2);
fn();