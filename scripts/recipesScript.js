document.addEventListener("DOMContentLoaded", () => {
    const prepToggleButtons = document.querySelectorAll(".prepToggle");

    prepToggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const prepMethod = button.nextElementSibling;
            prepMethod.classList.toggle("active");
        });
    });
});
