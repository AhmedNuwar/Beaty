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
            // Get item details from data attributes
            let itemName = this.dataset.name;
            let itemPrice = parseFloat(this.dataset.price);
            let itemImg = this.dataset.img;

            // Get the quantity input value
            let quantityInput = this.previousElementSibling;
            let quantity = parseInt(quantityInput.value) || 1;

            // Check if item already exists in the cart
            let existingItem = cart.find(item => item.name === itemName);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.total = existingItem.price * existingItem.quantity;
            } else {
                cart.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: quantity,
                    total: itemPrice * quantity,
                    img: itemImg
                });
            }

            // Update cart display and show cart
            updateCart();
            cartContainer.style.display = "block";
        });
    });

    // Function to update the cart UI
    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let totalAmount = 0;
        cartList.innerHTML = ""; // Clear the cart list

        cart.forEach((item, index) => {
            totalAmount += item.total;

            // Create wrapper for cart item
            let itemDiv = document.createElement("div");
            itemDiv.className = "cart-item d-flex align-items-center mb-2 border-bottom pb-2";

            // Image
            let img = document.createElement("img");
            img.src = item.img;
            img.alt = item.name;
            img.style.width = "50px";
            img.style.height = "50px";
            img.className = "me-2 rounded";

            // Item details
            let itemDetails = document.createElement("div");
            itemDetails.className = "flex-grow-1";
            itemDetails.innerHTML = `
                <strong>${item.name}</strong><br/>
                Quantity: ${item.quantity}<br/>
                Total: ${item.total.toFixed(2)} جنية
            `;

            // Remove button
            let removeBtn = document.createElement("button");
            removeBtn.className = "btn btn-sm remove-item ms-2";
            removeBtn.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
            removeBtn.dataset.index = index;
            removeBtn.addEventListener("click", function () {
                cart.splice(index, 1);
                updateCart();
            });

            // Assemble cart item
            itemDiv.appendChild(img);
            itemDiv.appendChild(itemDetails);
            itemDiv.appendChild(removeBtn);
            cartList.appendChild(itemDiv);
        });

        // Update total and cart count
        document.getElementById("cart-total").textContent = totalAmount.toFixed(2);
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalQuantity;
    }

    // Clear the cart when "Clear Cart" is clicked
    document.getElementById("clear-cart").addEventListener("click", function () {
        cart = [];
        updateCart();
    });
});





