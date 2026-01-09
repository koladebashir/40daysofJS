const btn = document.getElementById("btn").appendChild(document.createElement("button"));

btn.innerText = "log";

function clicker() {
    let count = 0;

    btn.addEventListener("click", () => {
        count++;
        console.log("logged with count", count);
    });
}

clicker();
btn.removeEventListener("click", () => { });

function counter() {
    let count = 0;

    return {
        increment: (num) => count += num,
        decrement: (num) => count -= num,
        reset: () => count = 0,
        show: () => console.log(count),
    }
}

let object = counter();
object.increment(1);
object.increment(1);
object.show();
object.reset();
object.decrement(1);
object.show();