document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the selected user type
        let userType = document.querySelector('input[name="user-type"]:checked').value;

        let name, email, password, confirmPassword, avatar;

        if (userType === "User") {
            name = document.getElementById("name").value;
            email = document.getElementById("email").value;
            password = document.getElementById("password").value;
            confirmPassword = document.getElementById("confirm-password").value;
            avatar = document.querySelector('input[name="avatar"]:checked')?.value;
        } else if (userType === "Chief") {
            name = document.getElementById("chief-name").value;
            email = document.getElementById("chief-email").value;
            password = document.getElementById("chief-password").value;
            confirmPassword = document.getElementById("chief-confirm-password").value;
            avatar = document.querySelector('input[name="chief-avatar"]:checked')?.value;
        }

        // Validation for password match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Retrieve existing users from local storage or initialize an empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the email already exists
        if (users.some(user => user.email === email)) {
            alert("This email is already registered!");
            return;
        }

        // Create a new user object
        let newUser = {
            name: name,
            email: email,
            password: password,
            userType: userType,
            avatar: avatar
        };

        // Save the new user to the users array and update localStorage
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to the login page after successful signup
        window.location.href = "Login.html";
    });
});
