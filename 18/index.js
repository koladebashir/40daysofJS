// insert an element before the first p tag

// first create the span element
const spanElem = document.createElement("span");

spanElem.innerText = "This is inside a span element";

// get the p tag for reference
const pElem = document.querySelector("p");

// then insert it before the p tag using the insertBefore method taking two arguments [element, reference]
document.body.insertBefore(spanElem, pElem); // ensure insertion uses parent of reference element in the document API


// investigating the object returned from a querySelector
{
    const pElem = document.querySelector("p");
    console.log(pElem.textContent); // three ways to access this, .innerText .innerHTML .textContent
}

// removing an element
{
    // starting with removing a child from a parent
    const list = document.getElementById("myList");
    // list.removeChild(list.children[0]);

    // also removing by calling the remove method off the node
    document.getElementById("remove-me").remove()
}

function filterList() {
    console.clear();
    const list = [...document.getElementById("myList").children].map(liElem => liElem.innerText);
    const hasSearchedItem = list.some((character) => {
        return character.toLowerCase() === document.getElementById("input").value.toLowerCase();
    })
    if (hasSearchedItem) {
        console.log("list item found!");
    } else {
        console.log("item not in list");
    }
}

{
    const list = document.getElementById("myList");
    console.log(list.firstChild.nextSibling)
}

// applying styling to the paragraph elem
// const para = document.getElementById("child-para");
// para.style.backgroundColor = "grey";
// para.style.color = "black";
// console.log(para.style);