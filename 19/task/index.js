console.log("Task script started✅");

const tabHeader = document.querySelector(".tab-headers");

tabHeader.addEventListener("tab:change", (e) => {
    const tabContents = document.querySelectorAll(".tab-contents div");
    const tabHeaders = document.querySelectorAll(".tab-headers button");

    // set active tab button
    tabHeaders.forEach((tHead) => {
        if (tHead.getAttribute("data-tab") === e.detail.dataTab) {
            tHead.classList.add("active");
        } else {
            tHead.classList.remove("active");
        }
    });

    // set active tab content
    tabContents.forEach((tCon) => {
        if (tCon.getAttribute("data-tab") === e.detail.dataTab) {
            tCon.classList.add("active");
        } else {
            tCon.classList.remove("active");
        }
    });
});

tabHeader.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
        const myEvent = new CustomEvent("tab:change", {
            detail: {
                description: `Tab changed | current: ${e.target.innerText}`,
                dataTab: e.target.getAttribute("data-tab"),
            },
            bubbles: true,
        });
        e.target.dispatchEvent(myEvent);
    }
});
