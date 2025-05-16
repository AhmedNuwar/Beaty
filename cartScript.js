let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cart-container");
let cartCount = document.getElementById("cart-count");
//shows The cart when the button is clicked
let cartToggleBtn = document.getElementById("cart-toggle-btn");
if (cartToggleBtn) {
    cartToggleBtn.addEventListener("click", toggleCart);
}
function toggleCart(){
    if (cartContainer) {
        cartContainer.classList.toggle("active");
    }
}
// -- toggle cart end --

// initializes the cart with an empty array

// Adds items to the cart when the button is clicked
let addToCartBtns = document.querySelectorAll(".add-to-cart");
addToCartBtns.forEach(btn =>
{
    btn.addEventListener("click", function()
    {
        let itemName = this.dataset.name;
        let itemPrice = parseFloat(this.dataset.price);
        let itemImg = this.dataset.img;

        //get quantity from input field
        let quantityInput = this.previousElementSibling;
        let quantity = parseInt(quantityInput?.value) || 1;
        let itemToatl = itemPrice * quantity;
        //check if the item is item already in the cart
        let existingItem = cart.find(item => item.name === itemName);
        if (existingItem)
        {
            existingItem.quantity += quantity;
            existingItem.total += existingItem.price * quantity;
        }
        else
        {
            cart.push(
            {
                name: itemName,
                price: itemPrice,
                img: itemImg,
                quantity: quantity,
                total: itemToatl
            });
        }
        SaveCart();
        UpdateCart();
        
        cartContainer.classList.add('active');
        
    });
    

});
// -- add to cart end --
// Updates the cart display when items are added
function UpdateCart() {
    let cartList = document.getElementById("cart-items");
    let menuCartList = document.querySelector(".menu-cart #cart-items");
    if (cartList) cartList.innerHTML = ""; // Clear the navbar cart display
    if (menuCartList) menuCartList.innerHTML = ""; // Clear the menu cart display
    let total = 0;

    cart.forEach((item, index) => {
        total += item.total; // Calculate the total price

        // Create container for each cart item
        let itemDiv = document.createElement("div");
        itemDiv.className = "cart-item d-flex align-items-center mb-2 border-bottom pb-2";

        // Create img element
        let itemImg = document.createElement("img");
        itemImg.src = item.img;
        itemImg.alt = item.name;
        itemImg.className = "cart-item-img";

        // Create item details element
        let itemDetails = document.createElement("div");
        itemDetails.className = "cart-item-details";
        itemDetails.innerHTML = `
                <strong>${item.name}</strong><br/>
                Quantity: ${item.quantity}<br/>
                Total: ${item.total.toFixed(2)} جنية`;

        // Create remove button element
        let removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-sm btn-danger remove-btn";
        removeBtn.innerHTML = `<i class="bi bi-x"></i>`;
        removeBtn.dataset.index = index;

        // Remove item from cart when button is clicked
        removeBtn.addEventListener("click", function () {
            let index = this.dataset.index;
            cart.splice(index, 1); // Remove item from cart array
            SaveCart(); // Save the updated cart
            UpdateCart(); // Update both carts
        });

        // Assemble the cart item element
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemDetails);
        itemDiv.appendChild(removeBtn);

        // Append to both carts
        if (cartList) cartList.appendChild(itemDiv);
    });

    // Update the total price display
    let cartTotal = document.getElementById("cart-total");
    let menuCartTotal = document.querySelector(".menu-cart #cart-total");
    if (cartTotal) cartTotal.textContent = `Total: ${total.toFixed(2)} جنية`;
    if (menuCartTotal) menuCartTotal.textContent = `Total: ${total.toFixed(2)} جنية`;

    // Update the number next to the cart icon
    if (cartCount) {
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalQuantity;
    }
}

// Save the cart to localStorage
function SaveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Fix clear cart button for both carts
let clearCartBtn = document.getElementById("clear-cart")
if (clearCartBtn){
    clearCartBtn.addEventListener("click", function () {
        cart = []; // Empty the array
        SaveCart(); // Update localStorage
        UpdateCart(); // Re-render both carts
    });
}
// Fix checkout button for both carts
let checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
        SaveCart(); // Save the current state of the cart
        window.location.href = "checkout.html"; // Redirect to the checkout page
    });
}

// Initial render when page loads
UpdateCart();
