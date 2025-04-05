//review form submission
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the review text (either Arabic or English)
    let reviewText = document.getElementById("review-text").value.trim();

    // Get the document language direction or check which field is filled
    let lang = document.documentElement.lang || document.body.getAttribute("dir");

    // Check if both fields are empty
    if (!reviewText) {
        if (lang === "ar" || document.getElementById("review-text") === document.activeElement) {
            alert("يرجى إدخال مراجعة قبل الإرسال.");
        } else {
            alert("Please enter a review before submitting.");
        }
        return;
    }

    // Get the review list container
    let reviewList = document.getElementById("review-list");

    // Create a new review div
    let newReview = document.createElement("div");
    newReview.classList.add("review");

    // Create the image
    let userImg = document.createElement("img");
    userImg.src = "Images/userAvatar.png"; 
    userImg.alt = "user profile picture";

    // Create review info container
    let reviewInfo = document.createElement("div");
    reviewInfo.classList.add("review-info");

    // Create the user's name (You can replace "Guest" with actual username logic if available)
    let userName = document.createElement("h6");
     if (lang === "ar") {
        userName.textContent = "زائر";
    }
    else{
        userName.textContent = "Guest";
    }
    

    // Create the review text
    let userReview = document.createElement("p");
    userReview.textContent = reviewText || reviewTextEn;

    // Append elements together
    reviewInfo.appendChild(userName);
    reviewInfo.appendChild(userReview);
    newReview.appendChild(userImg);
    newReview.appendChild(reviewInfo);
    reviewList.appendChild(newReview);

    // Clear input fields
    document.getElementById("review-text").value = "";
    document.getElementById("review-text-en").value = "";
});
// Add to cart functionality
// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Initialize an empty cart array
    let cart = [];

    // Select important DOM elements
    let cartContainer = document.querySelector(".cart-container");
    let cartToggleBtn = document.getElementById("cart-btn");
    let cartCount = document.getElementById("cart-count");

    // Toggle the cart visibility when the cart button is clicked
    cartToggleBtn.addEventListener("click", function () {
        cartContainer.style.display = (cartContainer.style.display === "none" || cartContainer.style.display === "") ? "block" : "none";
    });

    // Add event listener to each "Add to Cart" button on the page
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            // Get item name and price from data attributes
            let itemName = this.dataset.name;
            let itemPrice = parseFloat(this.dataset.price);

            // Get the quantity input value (previous sibling of the button)
            let quantityInput = this.previousElementSibling;
            let quantity = parseInt(quantityInput.value) || 1;

            // Check if the item already exists in the cart
            let existingItem = cart.find(item => item.name === itemName);

            if (existingItem) {
                // If item exists, update its quantity and total
                existingItem.quantity += quantity;
                existingItem.total = existingItem.price * existingItem.quantity;
            } else {
                // If new item, add it to the cart array
                cart.push({ name: itemName, price: itemPrice, quantity, total: itemPrice * quantity });
            }

            // Update the cart display
            updateCart();

            // Automatically show the cart after adding an item
            cartContainer.style.display = "block";
        });
    });

    // Function to update the cart UI
    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let totalAmount = 0;
        cartList.innerHTML = ""; // Clear the cart list before re-rendering

        // Loop through cart items and create list elements for each
        cart.forEach((item, index) => {
            totalAmount += item.total;

            // Create list item element
            let li = document.createElement("li");
            li.textContent = `${item.name} (x${item.quantity}) - ${item.total.toFixed(2)} جنية `;

            // Create remove button and attach its event
            let removeBtn = document.createElement("button");
            removeBtn.className = "remove-item btn btn-sm btn-danger";
            removeBtn.textContent = "X";
            removeBtn.dataset.index = index;

            // Remove item from cart when clicked
            removeBtn.addEventListener("click", function () {
                cart.splice(index, 1); // Remove item by index
                updateCart(); // Refresh cart UI
            });

            // Append remove button to list item and list item to cart
            li.appendChild(removeBtn);
            cartList.appendChild(li);
        });

        // Update the total price in the cart
        document.getElementById("cart-total").textContent = totalAmount.toFixed(2);

        // Update the cart count next to the cart icon
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalQuantity;
    }

    // Clear the cart when the "Clear Cart" button is clicked
    document.getElementById("clear-cart").addEventListener("click", function () {
        cart = []; // Reset the cart array
        updateCart(); // Refresh cart UI
    });
});




