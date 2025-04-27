let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser){
    window.location.href = "Login.html";
}