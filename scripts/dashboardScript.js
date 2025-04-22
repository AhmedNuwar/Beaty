document.addEventListener("DOMContentLoaded", () => {
    const salesDiv = document.getElementById("sales");
    const selectMenu = document.getElementById("showBy");
    const salesTabs = salesDiv.querySelectorAll("div[id]"); // Select all child divs with an ID inside #sales

    selectMenu.addEventListener("change", (event) => {
        const selectedValue = event.target.value;

        salesTabs.forEach((tab) => {
            if (tab.id === selectedValue) {
                tab.style.display = "block";
            } else {
                tab.style.display = "none";
            }
        });
    });

    // Initialize: Hide all tabs except the first one
    salesTabs.forEach((tab, index) => {
        tab.style.display = index === 0 ? "block" : "none";
    });
});
