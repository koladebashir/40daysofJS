// objects and object manipulation

// Three types of ways to create an object

// first is using object literal

let person = {
    name: "John",
    age: 25
}
console.log(person);

// second is using a constructor

function Person(name, age) {
    this.name = name,
        this.age = age
}

let tapas = new Person("tapas", 32); // use it by using new on the constructor function

// thirdly is using JS Object

let choud = new Object();
choud.name = "Choud";
choud.age = 44;

/* objects house key value pairs
    the keys can be set dynamically using [] e.g object[variable] = value;
*/

// use the in keyword to check if a property exist in an object

// Build a student management system

function Student(name, age, ...grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
}

// let name = prompt("name:");
// let age = prompt("age:");
// let mathGrade = prompt("Math Grade:");
// let englishGrade = prompt("English Grade:");

// let student = new Student(name, age, mathGrade, englishGrade);

// student.calculateAverageGrade = function () {
//     let sum = 0;
//     let count = 0;
//     for (let key in this.grades) {
//         sum += +this.grades[key];
//         count++;
//     }
//     console.log(sum, count);
//     console.log(`Average grade is ${sum / count}`);
// }

// build a store inventory system
const book = prompt("Type a title");

let bookstore = {
    [book]: 1, // dynamic naming of property name
    checkAvailablity: function (bookName) {
        return Object.hasOwn(this, bookName) && this[bookName] > 0;
    },
    restock: function (bookName, count) {
        if (Object.hasOwn(this, bookName)) {
            this[bookName] += count;
        } else {
            this[bookName] = count;
        }
        console.log(`${bookName} restocked. Current inventory: ${this[bookName]}`);
    }
}

