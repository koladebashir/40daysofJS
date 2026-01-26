function highlight() {
  console.log("about to highlight some elements");

  let elems = document.querySelectorAll("p.info");
  elems.forEach((elem) => {
    elem.style.backgroundColor = "yellow";
  });
}

function filterList() {
  const searchElem = document.getElementById("searchInput");
  let input = searchElem.value;

  let listItems = document.querySelectorAll("ul#fruits li");

  listItems.forEach((item) => {
    item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
  })
}

// Tasks

// 1. Find the Most Frequent Word in a Paragraph

const paraElem = document.getElementById("text");
let textArr = paraElem.innerText.split(" ");
let mappedItemsCount = textArr.reduce((accum, curr) => {
  // clean up word with .
  if (curr.endsWith(".")) {
    curr = curr.slice(0, curr.length - 1);
  }
  if (curr in accum) accum[curr]++;
  else accum[curr] = 1;
  return accum;
}, {});
const mappedItemArr = Object.entries(mappedItemsCount);
const maxNumber = mappedItemArr.reduce((accum, current) => {
  accum = Number(current[1]) > accum ? Number(current[1]) : accum;
  return accum;
}, 0);

const word = mappedItemArr.find((item) => item[1] === maxNumber);
console.log("Most frequent word:", word[0])

// 2. Create a zebra pattern

const carsLiElem = document.querySelectorAll("ul#cars li");
for (let [index, car] of carsLiElem.entries()) {
  if (index % 2 == 0) {
    car.style.backgroundColor = "black";
    car.style.color = "white";
  } else {
    car.style.color = "black";
    car.style.backgroundColor = "white";
  }
}


// write a script that replaces occurence of a word in a paragraph

function replace(elId, current, newWord) {
  let paraElem = document.getElementById(elId);
  paraElem.innerText = paraElem.innerText.replace(current, newWord);
}

// count all unique links in a page and display count

function countLinks() {
  const linkList = document.querySelectorAll("a");
  let count = 0;
  linkList.forEach(() => count++);
  console.log(`There are ${count} unique links on the page`);
}