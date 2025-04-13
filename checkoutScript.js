document.addEventListener("DOMContentLoaded", function () {
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Select elements
    let cartItemsList = document.getElementById("checkout-cart-items");
    let cartTotalElement = document.getElementById("checkout-cart-total");

    // Function to render the cart
    function renderCart() {
        cartItemsList.innerHTML = ''; // Clear list
        let totalAmount = 0;

        cart.forEach((item, index) => {
            totalAmount += item.total;

            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <strong>${item.name}</strong>  
                <span>${item.total.toFixed(2)} جنية</span>
                <button class="remove-item btn btn-sm btn-danger" data-index="${index}">
                    <i class="bi bi-x"></i>
                </button>`;
            cartItemsList.appendChild(listItem);
        });

        // Update total
        cartTotalElement.textContent = totalAmount.toFixed(2);

        // Attach buttons
        attachRemoveEvents();
        //attachQuantityEvents(); // Uncomment if you want to handle quantity changes
    }

    // Handle increase/decrease quantity
   /* function attachQuantityEvents() {
        document.querySelectorAll(".increase").forEach(i => {
            i.addEventListener("click", function () {
                const index = this.dataset.index;
                cart[index].quantity++;
                cart[index].total = cart[index].quantity * cart[index].price;
                saveCartAndRender();
            });
        });

        document.querySelectorAll(".decrease").forEach(i => {
            i.addEventListener("click", function () {
                const index = this.dataset.index;
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    cart[index].total = cart[index].quantity * cart[index].price;
                } else {
                    cart.splice(index, 1);
                }
                saveCartAndRender();
            });
        });
    }*/

    // Handle remove button
    function attachRemoveEvents() {
        document.querySelectorAll(".remove-item").forEach(i => {
            i.addEventListener("click", function () {
                const index = this.dataset.index;
                cart.splice(index, 1);
                saveCartAndRender();
            });
        });
    }

    // Save and re-render
    function saveCartAndRender() {
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Initial render
    renderCart();

    // Button: Edit cart (go back to main page)
    document.getElementById("edit-cart-btn").addEventListener("click", function () {
        window.location.href = "Chief.html";
    });

    // Button: Continue checkout
    document.getElementById("continue-checkout-btn").addEventListener("click", function () {
        alert("Proceeding to checkout...");
        // Implement checkout logic here
    });
});
