const clickUpBtn = document.getElementById("incrementBtn");
let counter = 0;

const handleCount = () => {
    counter++
    console.log("Count++ clicked. count value:", counter);
}

clickUpBtn.addEventListener("click", handleCount);

document.addEventListener("DOMContentLoaded", () => console.log("DOM content loaded"));

const btn = document.getElementById("change-id");
btn.addEventListener("change", (event) => console.log(event.target.value));