function changeLanguage(lang) {
    document.documentElement.lang = lang; // Update lang attribute
    document.dir = lang === "ar" ? "rtl" : "ltr"; // Change text direction

    document.querySelectorAll("[data-lang-en]").forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
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