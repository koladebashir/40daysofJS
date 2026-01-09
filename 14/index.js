// payment processing

let balance = 10000;

function processPayment(amount) {
    try {
        if (!amount || amount < 0) {
            throw new Error("amount to process cannot be empty or negative");
        } else if (amount > balance) {
            throw new Error("amount to process greater than available balance");
        } else {
            console.log("Payment Successful✅");
        }
    } catch (error) {
        console.error("Error processing payment:", error.message);
    }
}

// ecommerce error handling system

let errors = {
    UserError: function (message) {
        this.name = "UserError";
        this.message = message;
        this.stack = new Error().stack;
    },
    PaymentError: function (message) {
        this.name = "PaymentError";
        this.message = message;
        this.stack = new Error().stack;
    },
    ServerError: function (message) {
        this.name = "ServerError";
        this.message = message;
        this.stack = new Error().stack;
    },
    EmailError: function (message) {
        this.name = "EmailError";
        this.message = message;
        this.stack = new Error().stack;
    }
}

// api call

function fetchData(url) {
    try {
        validateUrl(url);
        console.log("finished fetching data");
    } catch (error) {
        console.error("error fetching data:", error.message);
    }
}

function validateUrl(url) {
    if (!(url.startsWith("http") || url.startsWith("https"))) throw new Error("url scheme not present");
}

// fetchData("http://www.google.com");
// fetchData("https://www.google.com");
// fetchData("httsp://www.google.com");
// fetchData("www.google.com");


// validate form data

const userInput = { username: "", age: -2 };

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    this.stack = new Error().stack;
}

function validateInput(userInput) {
    for (let key in userInput) {
        try {
            if (key === "username") {
                if (userInput[key] === "") throw new ValidationError("Username cannot be empty");
            } else if (key === "age") {
                if (userInput[key] < 0) throw new ValidationError("Age must be a positive number");
            } else {
                continue;
            }
        } catch (error) {
            console.error(`${error.name}: ${error.message}`);
        }
    }
}

validateInput(userInput);

// reading a file

const fileInDir = false;

function readFile(filePath) {
    try {
        if (!fileInDir) {
            throw new Error("file not found");
        }
        console.log(`reading file at ${filePath}`);
    } catch (error) {
        console.error("error reading file:", error.message);
    } finally {
        console.log("closing file and freeing resources");
    }
}

// readFile("/usr/bin/degger.pb");

// parse json

const jsonStr = '{}';

function parseJson(str) {
    try {
        const parsedString = JSON.parse(str);
        return "string successfully parsed:", parsedString;
    } catch (error) {
        return "Invalid JSON";
    }
}

console.log(parseJson(jsonStr));