document.addEventListener("DOMContentLoaded", () => {
    // show withdraw method on page load //
    getWithdrawMethod()
    // ..............//
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
function setWithdrawMethod(method){
    if(method){
        localStorage.setItem("withdrawMethod", method)
        getWithdrawMethod();
        showMsg('methodChanged', true)
        showHideDiv('changeMethodDiv');
        
    }
    
}
function getWithdrawMethod(){
    let withdrawMethod = localStorage.getItem("withdrawMethod");
    let withdrawMethodElement = document.getElementById('methodElement')
    if (withdrawMethod && withdrawMethodElement) {
        withdrawMethodElement.innerHTML = withdrawMethod;
        
    }
}
