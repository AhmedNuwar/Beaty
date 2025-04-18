document.addEventListener("DOMContentLoaded", () => {
    const prepToggleButtons = document.querySelectorAll(".prepToggle");

    prepToggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const prepMethod = button.nextElementSibling;
            if (prepMethod.style.display === "none" || !prepMethod.style.display) {
                prepMethod.style.display = "block";
            } else {
                prepMethod.style.display = "none";
            }
        });
    });
});
