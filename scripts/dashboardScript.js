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
function removeDish(id){
    let row = document.getElementById(id);
    if(row) row.remove();
}
// order ready
let index = 0;
let orderNo = ['#1001', '#1002', '#1003', '#1004'];
let customerName = ["فاطمة السيد", "عمر عادل","نورا حسن","محمد سعد"];
let orderPrice = ["١٣٥ جنية","٩٠ جنية","١١٠ جنية","٧٥ جنية"]

let customerNameP = document.getElementById('customerName');
let orderIdP = document.getElementById('orderId');
let orderPriceP = document.getElementById('orderPrice');
let orderReadyBtn = document.getElementById('order-ready');
let parentElement = document.getElementById('manage-orders');


if (orderReadyBtn && parentElement){
    
    orderReadyBtn.addEventListener('click', () => {
        if (customerNameP && orderIdP && orderPrice){
            console.log('condition applied')
            index = (index + 1)
            if(index < orderNo.length){
                customerNameP.innerHTML = customerName[index]
                orderIdP.innerHTML = orderNo[index];
                orderPriceP.innerHTML = orderPrice[index];
            }
            else{
               parentElement.innerHTML= `
               <div class="item">
                <h5>no current orders</h5
                </div>
               `;
            }
           alert('مندوب التوصيل في طريقه اليك');
        }          
    });
}

// function addNewDish(){
//     console.log('function called')
//     let form = document.getElementById('addNewDishForm');
//     if(form){
//         form.addEventListener('submit', function(event){
//         event.preventDefault();

//         let dishName = document.getElementById('dish-name');
//         let dishDescrption = document.getElementById('dish-descrption');
//         let dishImg = document.getElementById('dish-image');
//         let dishPrice = parseFloat(document.getElementById('dish-price').value);
//         let dishSale = document.getElementById('dish-sale');

//         // Create new td elements for each variable
//         let nameData = document.createElement('td');
//         nameData.innerHTML = dishName.value;

//         let descriptionData = document.createElement('td');
//         descriptionData.innerHTML = dishDescrption.value;

//         let imgData = document.createElement('td');
//         let imgElement = document.createElement('img');
//         imgElement.src = dishImg.value;
//         imgElement.alt = "Dish Image";
//         imgElement.style.width = "50px"; // Example styling
//         imgElement.style.height = "50px";
//         imgData.appendChild(imgElement);

//         let priceData = document.createElement('td');
//         priceData.innerHTML = dishPrice.toFixed(2);

//         let saleData = document.createElement('td');
//         saleData.innerHTML = dishSale.value;

//         // Append these td elements to a new row if needed
//         let newRow = document.createElement('tr');
//         newRow.appendChild(nameData);
//         newRow.appendChild(descriptionData);
//         newRow.appendChild(imgData);
//         newRow.appendChild(priceData);
//         if (dishSale) newRow.appendChild(saleData);

//         // Assuming there's a table with id 'dishTable' to append the new row
//         let dishTable = document.getElementById('allDishes');
//         if (dishTable) {
//             let tbody = dishTable.querySelector('tbody') || dishTable;
//             tbody.appendChild(newRow);
//         }

//         })
        
//     }
// }
