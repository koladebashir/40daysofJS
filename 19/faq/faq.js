console.log("Project: FAQ");


const faq = document.querySelector(".faq");


faq.addEventListener("click", (e) => {
    if (e.target.classList.contains("question")) {
        e.stopPropagation();
        e.target.parentNode.lastElementChild.classList.toggle("show");
    }
})

document.addEventListener("click", (e) => {
    const faqAnswers = document.querySelectorAll(".answer.show");
    faqAnswers.forEach(faq => faq.classList.remove("show"));
})