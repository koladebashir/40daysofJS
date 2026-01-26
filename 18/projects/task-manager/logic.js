function addTask() {

    const list = document.getElementById("main-list");
    const li = document.createElement("li");
    const inputElem = document.getElementById("input");
    const btn = document.getElementById("btn");

    if (inputElem.value.trim() === "") return;

    li.innerText = inputElem.value;
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✅";
    doneBtn.style.marginLeft = "5px";
    doneBtn.onclick = function () {
        li.classList.toggle("completed");
    }
    li.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.innerText = "✍🏾";
    editBtn.style.marginLeft = "5px";
    editBtn.onclick = function () {
        inputElem.value = li.childNodes[0].textContent;
        btn.innerText = "Edit Task";
        btn.onclick = function () {
            li.childNodes[0].textContent = inputElem.value;
            inputElem.value = ""
            btn.innerText = "Add Task";
        }
    }
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () {
        li.remove();
    }
    li.appendChild(deleteBtn);

    list.appendChild(li);
    inputElem.value = "";
}

function filterList() {
    const list = document.getElementById("main-list");
    const filterWord = document.getElementById("filter");
    [...list.children].forEach((item) => {
        if (item.childNodes[0].textContent.toLowerCase().includes(filterWord.value.toLowerCase())) item.style.display = "block";
        else item.style.display = "none";
    });
}