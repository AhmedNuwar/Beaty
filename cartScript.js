document.addEventListener("DOMContentLoaded", function () {
    // Load the cart from localStorage or initialize an empty one if not found
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Get references to key elements
    let cartContainer = document.querySelector(".cart-container"); // the cart dropdown or popup
    let cartToggleBtn = document.getElementById("cart-btn");       // the button that toggles the cart visibility
    let cartCount = document.getElementById("cart-count");         // number indicator on the cart icon

    // Show/hide the cart container when cart button is clicked
    cartToggleBtn.addEventListener("click", function () {
        cartContainer.style.display = (cartContainer.style.display === "none" || cartContainer.style.display === "") ? "block" : "none";
    });

    // Listen to each "Add to Cart" button on the page
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            // Get item info from data attributes
            let itemName = this.dataset.name;
            let itemPrice = parseFloat(this.dataset.price);
            let itemImg = this.dataset.img;

            // Get quantity from input before the button
            let quantityInput = this.previousElementSibling;
            let quantity = parseInt(quantityInput.value) || 1;

            // Check if item already exists in the cart
            let existingItem = cart.find(item => item.name === itemName);

            if (existingItem) {
                // If exists, increase quantity and update total
                existingItem.quantity += quantity;
                existingItem.total = existingItem.price * existingItem.quantity;
            } else {
                // Else, add new item to cart
                cart.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: quantity,
                    total: itemPrice * quantity,
                    img: itemImg
                });
            }

            saveCart();          // Save cart to localStorage
            updateCart();        // Update cart display
            cartContainer.style.display = "block"; // Auto-show the cart
        });
    });

    // Update the cart UI: list items and total
    function updateCart() {
        let cartList = document.getElementById("cart-items"); // Where cart items will be displayed
        let totalAmount = 0;
        cartList.innerHTML = ""; // Clear previous content

        cart.forEach((item, index) => {
            totalAmount += item.total;

            // Create a container for the cart item
            let itemDiv = document.createElement("div");
            itemDiv.className = "cart-item d-flex align-items-center mb-2 border-bottom pb-2";

            // Create image element
            let img = document.createElement("img");
            img.src = item.img;
            img.alt = item.name;
            img.className = "me-2 rounded";
            img.style.width = "50px";
            img.style.height = "50px";

            // Create element for item details
            let itemDetails = document.createElement("div");
            itemDetails.className = "flex-grow-1";
            itemDetails.innerHTML = `
                <strong>${item.name}</strong><br/>
                Quantity: ${item.quantity}<br/>
                Total: ${item.total.toFixed(2)} جنية
            `;

            // Create remove button
            let removeBtn = document.createElement("button");
            removeBtn.className = "btn btn-sm remove-item ms-2";
            removeBtn.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
            removeBtn.dataset.index = index;

            // Remove the item from cart on click
            removeBtn.addEventListener("click", function () {
                cart.splice(index, 1); // remove from array
                saveCart();            // update localStorage
                updateCart();          // re-render cart
            });

            // Assemble and append to cart list
            itemDiv.appendChild(img);
            itemDiv.appendChild(itemDetails);
            itemDiv.appendChild(removeBtn);
            cartList.appendChild(itemDiv);
        });

        // Update the total amount in the cart
        document.getElementById("cart-total").textContent = totalAmount.toFixed(2);

        // Update the number next to the cart icon
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalQuantity;
    }

    // Save the cart to localStorage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // When "Clear Cart" is clicked
    document.getElementById("clear-cart").addEventListener("click", function () {
        cart = [];       // empty the array
        saveCart();      // update localStorage
        updateCart();    // re-render cart
    });

    // When "Checkout" is clicked
    document.getElementById("checkout-btn").addEventListener("click", function () {
        saveCart();                      // Save the current state of the cart
        window.location.href = "checkout.html"; // Redirect to the checkout page
    });

    // Initial render when page loads
    updateCart();
});