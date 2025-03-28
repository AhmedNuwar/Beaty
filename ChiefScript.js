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
