function changeLanguage(lang) {
    document.documentElement.lang = lang; // Update lang attribute
    document.dir = lang === "ar" ? "rtl" : "ltr"; // Change text direction

    document.querySelectorAll("[data-lang-en]").forEach(element => {
        if (element.placeholder !== undefined) {
            // Update input fields' placeholders
            element.setAttribute("placeholder", element.getAttribute(`data-lang-${lang}`));
        } else if (element.tagName === "BUTTON" || element.tagName === "INPUT" && element.type === "submit") {
            // Update buttons and submit inputs
            element.setAttribute("value", element.getAttribute(`data-lang-${lang}`)); // For input buttons
            element.textContent = element.getAttribute(`data-lang-${lang}`); // For regular buttons
        } else {
            // For other elements with text content
            element.textContent = element.getAttribute(`data-lang-${lang}`);
        }
    });

    // Save preference in localStorage
    localStorage.setItem("selectedLanguage", lang);
}

// Event listener for language switcher
document.getElementById("languageSwitcher").addEventListener("change", function () {
    changeLanguage(this.value);
});

// Load saved language preference
const savedLang = localStorage.getItem("selectedLanguage") || "ar"; 
document.getElementById("languageSwitcher").value = savedLang;
changeLanguage(savedLang);
