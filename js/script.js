document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add("visible");
        }, index * 500);
    });
});
