document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve the users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching email and password
    let user = users.find(user => user.email === email && user.password === password);

    // If user exists, log them in and redirect; otherwise, show an error message
    if (user) {
        localStorage.setItem("currentUser", user)
        // Redirect to a page (e.g., homepage) after successful login
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }
});
