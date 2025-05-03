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
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Redirect to a page (e.g., homepage) after successful login
        if (user.userType === 'User') window.location.href = "index.html";
        else if (user.userType === 'Chief') window.location.href = "Profile.html";
    } else {
        alert("Invalid email or password.");
    }
    
});
function toggleForgotPass(formId){
    let forgotPasswrodForm = document.getElementById(formId);
    forgotPasswrodForm.classList.toggle('active')
}
    let forgotPasswrodForm = document.getElementById('forgotPassForm')
    forgotPasswrodForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let email = document.getElementById("forgot-email").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching email
    let user = users.find(user => user.email === email);

    // If user exists, send a reset password link; otherwise, show an error message
    let emailSent = document.getElementById('emailSent');
    let emailNotFound = document.getElementById('notFound');
    if (user) {
        emailSent.classList.remove('hidden');
        emailSent.classList.add('show');
        forgotPasswrodForm.reset()
        toggleForgotPass(forgotPasswrodForm.parentElement.id)
        setTimeout(() => {
            emailSent.classList.add('hidden');
            setTimeout(() => {
              div.style.display = 'none';
            }, 1000); // match the transition duration
          }, 3000);
    } else {
        emailNotFound.classList.remove('hidden');
        emailNotFound.classList.add('show');
        setTimeout(() => {
            emailNotFound.classList.add('hidden');
            setTimeout(() => {
              div.style.display = 'none';
            }, 1000); // match the transition duration
          }, 3000);
    }
});