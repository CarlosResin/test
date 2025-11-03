document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("h2");
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const section = this.nextElementSibling;
            if (section && section.classList.contains("section")) {
                section.style.display = section.style.display === "block" ? "none" : "block";
            }
        });
    });
});
