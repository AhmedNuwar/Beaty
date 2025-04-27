document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("languageToggle");
    const savedLang = localStorage.getItem("selectedLanguage") || "ar";

    function changeLanguage(lang) {
        if (!["ar", "en"].includes(lang)) lang = "ar"; // التأكد من أن اللغة صحيحة

        document.documentElement.lang = lang;
        document.dir = lang === "ar" ? "rtl" : "ltr";

        document.querySelectorAll("[data-lang-en]").forEach(element => {
            if (element.hasAttribute("placeholder")) {
                element.setAttribute("placeholder", element.getAttribute(`data-lang-${lang}`));
            } else if (element.tagName === "INPUT" && (element.type === "submit" || element.type === "button")) {
                element.setAttribute("value", element.getAttribute(`data-lang-${lang}`));
            } else {
                element.textContent = element.getAttribute(`data-lang-${lang}`);
            }
        });

        // تحديث نص الزر ليعكس اللغة التالية
        languageToggle.textContent = lang === "ar" ? "English" : "العربية";

        localStorage.setItem("selectedLanguage", lang);
    }

    // تبديل اللغة عند النقر على الزر
    languageToggle.addEventListener("click", () => {
        const newLang = document.documentElement.lang === "ar" ? "en" : "ar";
        changeLanguage(newLang);
    });

    // تحميل اللغة المخزنة عند فتح الصفحة
    changeLanguage(savedLang);
});
