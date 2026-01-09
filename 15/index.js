// 001 - 006
const five = new Array(1, 2, 3, 4, 5);
const three = new Array(3);
const six = ["one", "two", 3, 4, "five", "six"];
console.log(six[length - 3]); // 4

for (let i = 0; i < six.length; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Element at index ${i} is `, six[i]);
}

five.unshift(0);
five.push(6);

const end = six.pop();
const front = six.shift();

console.log(six);

// remembering object destructuring

// const resume = {
//     name: "Jitesh",
//     cgpa: 4.0,
//     department: "Computer Engineering"
// }

// function checkDepartment({ department }) {
//     if (department.toLowerCase().includes("engineering")) return true;
//     else console.log(`${this.name} applied to the wrong role`);
// }

// console.log(checkDepartment(resume));

// const { name, department } = resume;

// console.log(name, department);

// 007

const favFoods = [
  "eba",
  "jollof rice",
  "chinese rice",
  "apples",
  "sharwama",
  "pizza",
  "vegetable soup",
  "egusi soup",
  "ewa agoin",
  "yam and egg",
];

const [, , , , , pizza] = favFoods;
console.log(pizza);
const [, , ...rest] = favFoods;

const newArr = [...favFoods];
const newerArr = favFoods.slice();
console.log(newArr);
console.log(newArr === favFoods);
console.log(newerArr === favFoods);

const toBeEmptied = [1, 2];
toBeEmptied.length = 0;
console.log(toBeEmptied);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    numbers.length = 6;
  }
}

{
  let toBeEmptied = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  toBeEmptied.splice(0, 10);
  console.log(toBeEmptied);
}

{
  const empty1 = [];
  const empty2 = [];
  console.log(empty1.concat(empty2));
}

{
  // T-015: check if a value is partially matching with any of the elements in an array
  const partialValue = "johnsmi";
  const array = ["johnsmith", "johnsmith"];
  console.log(array.indexOf(partialValue));
}

{
  const employees = [
    { id: 1, name: "Jin Young-ki", department: "Executive", salary: 150000 },
    { id: 2, name: "Jin Dong-ki", department: "Executive", salary: 145000 },
    { id: 3, name: "Jin Do-jun", department: "Investment", salary: 200000 },
    { id: 4, name: "Lee Hang-jae", department: "Operations", salary: 95000 },
    { id: 5, name: "Seong Hyun-min", department: "Marketing", salary: 110000 },
    { id: 6, name: "Mo Hyun-min", department: "Gallery", salary: 120000 },
    { id: 7, name: "Choi Chang-je", department: "Politics", salary: 85000 },
    { id: 8, name: "Jin Yoon-ki", department: "Film", salary: 90000 },
    { id: 9, name: "Rachel", department: "Investment", salary: 180000 },
    { id: 10, name: "Oh Se-hyun", department: "Investment", salary: 195000 },
    { id: 11, name: "Jin Hwa-young", department: "Retail", salary: 130000 },
    { id: 12, name: "Ha In-suk", department: "Security", salary: 70000 },
  ];

  // filter employees earning over 100k
  const filtered = Object.groupBy(employees, ({ salary }) => {
    return salary > 100000 ? ">100k" : "<100k";
  });

  // filter based on department
  const departments = Object.groupBy(employees, ({ department, salary }) => {
    return (department === "Executive" || department === "Investment") &&
      salary > 100000
      ? "POI"
      : "nPOI";
  });
  console.log(departments);
}

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

const engineeringEmployees = employees.filter(
  (empl) => empl.departmentId === departments[1].id,
);
console.log(engineeringEmployees);

const employeeDept = employees.map((employee) => {
  switch (employee.departmentId) {
    case 1:
      return `${employee.name} (${departments[0].name})`;
    case 2:
      return `${employee.name} (${departments[1].name})`;
    case 3:
      return `${employee.name} (${departments[2].name})`;
    case 4:
      return `${employee.name} (${departments[3].name})`;
  }
});

let maxSalary = 0;
employees.forEach((employee) => {
  if (employee.salary > maxSalary) maxSalary = employee.salary;
});
console.log(maxSalary);

// T-024: check if there is at least one employee in the sales department
{
  const salesID = departments[3].id;
  const isSalesEmployeePresent = employees.some((empl) => {
    return empl.departmentId === salesID;
  });
  console.log(isSalesEmployeePresent);
}

// T-025: Write a function to filter employees earning more than 6000

{
  const salaryOver6k = employees.filter((empl) => empl.salary >= 6000);
  console.log(salaryOver6k);
}

// T-026: Create an array of employee names only

{
  const employeeNames = employees.map((empl) => empl.name);
  console.log(employeeNames);
}

// T-027: Calculate the total salary of all employees using (possibly reduce)
const i = 0;

{
  const totalSalary = employees.reduce((accum, { salary }) => {
    return accum + salary;
  }, 0);

  console.log(totalSalary);
}

// T-028: Is there any employee earning less than 5000
{
  const isEarningLess = employees.some((empl) => empl.salary < 5000);
  console.log("Employee earns less than 5K?", isEarningLess);
}

// T-029: Find the first employee who earns exactly 5100.
{
  const employee = employees.find((empl) => empl.salary === 5100);
  console.log("Employee earning 5100:", employee);
}

// T-030: Find the last employee in the "HR" department.
{
  const lastHrEmployee = employees.findLast((empl) => empl.departmentId === 1);
  console.log("Last employee in HR:", lastHrEmployee);
}

// T-031: Find the first employee in the "Marketing" department.
{
  const marketingEmployee = employees.find((empl) => empl.departmentId === 3);
  console.log("First employee in Marketing:", marketingEmployee);
}

// T-032: Check if all employees earn more than 4000.
{
  const allEarnOver4k = employees.every((empl) => empl.salary > 4000);
  console.log("Do all employees earn over 4k?", allEarnOver4k);
}

// T-033: Find the first employee in the "Sales" and "HR" department.
{
  const sales = employees.find((empl) => empl.departmentId === 4);
  const hr = employees.find((empl) => empl.departmentId === 1);
  console.log(`first sales employee: ${sales} | first hr employee: ${hr}`);
}

// T-034: Verify if all employees belong to a department listed in the departments array
{
  const departmentIDs = departments.map((dept) => dept.id);
  const isDepartment = employees.every((empl) =>
    departmentIDs.includes(empl.departmentId),
  );
  console.log("employees belong to listed departments:", isDepartment);
}

// T-035: Log each employee's name and department name to the console.
{
  employees.forEach((empl) => {
    console.log(
      `${empl.name} ${departments.find((dept) => dept.id === empl.departmentId).name}`,
    );
  });
}

// T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
{
  const employeesWithSkills = [
    {
      id: 1,
      name: "Alice",
      skills: ["Excel", "Management", "Public Speaking"],
    },
    { id: 2, name: "Bob", skills: ["JavaScript", "React", "Node.js"] },
    { id: 3, name: "Charlie", skills: ["SQL", "Data Visualization", "Python"] },
    { id: 4, name: "Diana", skills: ["Budgeting", "Project Management"] },
    { id: 5, name: "Edward", skills: ["Java", "System Architecture", "AWS"] },
    {
      id: 6,
      name: "Fiona",
      skills: ["SEO", "Content Strategy", "Copywriting"],
    },
    { id: 7, name: "George", skills: ["Tableau", "Market Research"] },
    {
      id: 8,
      name: "Helen",
      skills: ["Salesforce", "Negotiation", "Cold Calling"],
    },
    { id: 9, name: "Ian", skills: ["Git", "C#", "Unity"] },
    {
      id: 10,
      name: "Jane",
      skills: ["Recruiting", "Onboarding", "Conflict Resolution"],
    },
  ];

  const employeeSkills = employeesWithSkills.map((empl) => empl.skills).flat();
  console.log(employeeSkills);
}

// T-039: Find the total salary of all employees working in the "Engineering" department.
{
  const totalSalary = employees
    .filter((empl) => empl.departmentId === 2)
    .reduce((accum, { salary }) => {
      return accum + salary;
    }, 0);
  console.log("total engineering salary:", totalSalary);
}

// T-040: Check if there is any department where all employees earn more than 5000.
{
  // for (const { id } of departments) {
  //     let ret = employees.filter(empl => empl.departmentId === id).every(empl => empl.salary > 5000);
  //     if (ret) {
  //         console.log(ret);
  //         break;
  //     }
  // }

  const grouped = Object.groupBy(employees, (empl) => empl.departmentId);
  const richDept = Object.keys(grouped).some((groupId) => {
    grouped[groupId].every(({ salary }) => salary > 5000);
  });
  console.log(richDept);
}

// T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
{
  const employees = [
    {
      id: 1,
      name: "Alice",
      departmentId: 1,
      salary: 5000,
      projects: ["Onboarding Revamp", "HR Portal"],
    },
    {
      id: 2,
      name: "Bob",
      departmentId: 2,
      salary: 7000,
      projects: ["API Migration", "Cloud Setup"],
    },
    {
      id: 3,
      name: "Charlie",
      departmentId: 3,
      salary: 4500,
      projects: ["Audit 2024", "Tax Compliance"],
    },
    {
      id: 4,
      name: "Diana",
      departmentId: 1,
      salary: 5500,
      projects: ["Recruitment Drive"],
    },
    {
      id: 5,
      name: "Edward",
      departmentId: 2,
      salary: 8000,
      projects: ["API Migration", "Security Audit"],
    },
    {
      id: 6,
      name: "Fiona",
      departmentId: 4,
      salary: 6000,
      projects: ["Social Media Ads", "Brand Launch"],
    },
    {
      id: 7,
      name: "George",
      departmentId: 3,
      salary: 5200,
      projects: ["Financial Forecast"],
    },
    {
      id: 8,
      name: "Helen",
      departmentId: 4,
      salary: 7200,
      projects: ["Brand Launch", "SEO Strategy"],
    },
    {
      id: 9,
      name: "Ian",
      departmentId: 2,
      salary: 4800,
      projects: ["Cloud Setup"],
    },
    {
      id: 10,
      name: "Jane",
      departmentId: 1,
      salary: 5100,
      projects: ["HR Portal", "Benefit Review"],
    },
  ];

  // let projectsArr = [];
  // let uniqueCount = 0;
  // employees.forEach(({ projects }) => {
  //     projects.forEach((proj) => {
  //         if (!projectsArr.includes(proj)) {
  //             projectsArr.push(proj);
  //             uniqueCount++;
  //         }
  //     })
  // });

  // console.log(`There are ${uniqueCount} unique projects in the employees array`);

  const projectsSet = new Set(employees.flatMap(({ projects }) => projects));
  console.log(
    `There are ${projectsSet.size} unique projects in the employees array`,
  );
}

// T-042: For each employee, find their department name and return an array of employee names with their department names

{
  const departmentTable = departments.reduce((accum, currentDept) => {
    accum[currentDept.id] = currentDept.name;
    return accum;
  }, {});
  console.log(
    employees.map((empl) => {
      return [empl.name, departmentTable[empl.departmentId]];
    }),
  );
}

// T-043: Get a list of names of employees earning more than 6000
{
  // console.log(
  //     employees.filter(empl => empl.salary > 6000).map(empl => empl.name)
  // );

  console.log(
    employees.reduce((accum, empl) => {
      if (empl.salary > 6000) {
        accum.push(empl.name);
      }
      return accum;
    }, []),
  );
}

// T-044: Write a for-of loop to print the names of all employees from the employees array
{
  for (let { name } of employees) {
    console.log(name);
  }
}

console.log("----");

// T-045: Using a for-of loop, print the names of employees earning more than 5000.

{
  for (let { name, salary } of employees) {
    if (salary > 5000) {
      console.log(name);
    }
  }
}

// T-047: Write a for-of loop to match employees with their departments and print the results.
{
  for (let empl of employees) {
    console.log(
      `${empl.name} ${departments.find((dept) => dept.id === empl.departmentId).name}`,
    );
  }
}

// T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee
{
  let it = employees.entries();
  for (let [index, empl] of it) {
    console.log(index, empl.name);
  }
}

// T-049: Given the array-like object below, access the second element and log it:
{
  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  console.log(Array.from(arrayLike)[1]);
}

function converToArray(...args) {
  return args;
}

// T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

const ret = converToArray(1, 2, 3);
console.log(ret);

// T-052: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];

const arrVec = [...arr1, ...arr2];
console.log(arrVec);

console.log(arr1.concat(arr2));

// T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

const a = new Array(5);
a.fill("A", 0);
console.log(a);

// T-054: Use Array.from to convert a string like "Hello" into an array of characters.

console.log(Array.from("hello"));

// T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group()

console.log(
  Object.groupBy(
    ["apple", "banana", "apricot", "mango", "blueberry"],
    (name) => name[0],
  ),
);

// T-057: From this array[3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number.Hint: Use array method.

const arrNumbers = [3, 7, 3, 2, 3, 8, 7, 7];
const tallyObject = arrNumbers.reduce((accum, currentValue) => {
  if (accum[currentValue] === undefined) {
    accum[currentValue] = 1;
  } else {
    accum[currentValue]++;
  }
  return accum;
}, {});
const tallyArr = Object.entries(tallyObject);
console.log(tallyArr.sort(([, a], [, b]) => b - a)[0][0]);

// T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

{
  const array = [5, 2, 9, 1, 3, 6, 8, 8];
  const sortedArr = array.toSorted((a, b) => a - b);
  console.log(sortedArr);
  if (sortedArr.length % 2 === 0) {
    const index = sortedArr.length / 2;
    const median = (sortedArr[index - 1] + sortedArr[index]) / 2;
    console.log(`Median value: ${median}`);
  } else {
    const index = Math.floor(sortedArr.length / 2);
    console.log(`Median value: ${sortedArr[index]}`);
  }
}

// T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

{
  const arr = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ];
  const retArr = arr.reduce((accum, curr) => {
    accum[curr[0]] = curr[1];
    return accum;
  }, {});
  console.log(retArr);
}

// T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

console.log(
  [
    ["a", "b"],
    ["c", "d"],
  ].flatMap((letterArr) => letterArr.map((letter) => letter.toUpperCase())),
);

// T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

const tallyObj = [
  "apple",
  "banana",
  "apple",
  "mango",
  "banana",
  "banana",
].reduce((accum, curr) => {
  if (curr in accum) {
    accum[curr]++;
  } else {
    accum[curr] = 1;
  }
  return accum;
}, {});

console.log(tallyObj);

// T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

{
  const myVal = ["a", "b", "c", "d", "e"].slice(1, 4);
  console.log(myVal);
}

// T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

console.log([9, 3, 1, 6, 8].toSorted((a, b) => a - b));

// T-065: Group the follwing array elements based on age(Adult vs Non-Adult):
const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];

const userDistribution = Object.groupBy(users, ({ age }) => {
  if (age > 18) {
    return "adult";
  } else {
    return "non-adult";
  }
});

// T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative"

const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
const sentenceArr = sentence.split(" ");
const longestWordLength = sentenceArr.reduce((accum, curr) => {
  return curr.length > accum ? curr.length : accum;
}, 0);
console.log(longestWordLength);

// T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

function compareFn(arr1, arr2) {
  return arr1.reduce((accum, curr) => {
    if (arr2.includes(curr)) {
      accum.push(curr);
    }
    return accum;
  }, []);
}

const arr = compareFn([1, 2, 3, 4], [3, 4, 5, 6]);
console.log(arr);
