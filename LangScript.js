function changeLanguage(lang) {
    document.documentElement.lang = lang; // تغيير لغة الصفحة
    document.dir = lang === "ar" ? "rtl" : "ltr"; // تغيير اتجاه النص

    document.querySelectorAll("[data-lang-en]").forEach(element => {
        if (element.hasAttribute("placeholder")) {
            // تحديث placeholder لعناصر الإدخال النصي
            element.setAttribute("placeholder", element.getAttribute(`data-lang-${lang}`));
        } else if (element.tagName === "INPUT" && (element.type === "submit" || element.type === "button")) {
            // تحديث زر الإرسال أو أزرار الإدخال
            element.setAttribute("value", element.getAttribute(`data-lang-${lang}`));
        } else {
            // تحديث النص لباقي العناصر (مثل الأزرار العادية والنصوص داخل العناصر)
            element.textContent = element.getAttribute(`data-lang-${lang}`);
        }
    });

    // حفظ تفضيل اللغة في LocalStorage
    localStorage.setItem("selectedLanguage", lang);
}

// ضبط مستمع الحدث (Event Listener) لتغيير اللغة عند الاختيار من القائمة
document.getElementById("languageSwitcher").addEventListener("change", function () {
    changeLanguage(this.value);
});

// تحميل اللغة المحفوظة عند فتح الصفحة
const savedLang = localStorage.getItem("selectedLanguage") || "ar"; 
document.getElementById("languageSwitcher").value = savedLang;
changeLanguage(savedLang);
