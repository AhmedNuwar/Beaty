function goTo(url)
{
    window.location.href = url;
}
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
document.addEventListener('DOMContentLoaded', function() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // set user avatar
    let profile = document.getElementById('profile');
    if (profile){
    profile.innerHTML = `<img src="images/${currentUser.avatar}" style="width:50px; border-radius:50%; margin: 0 5px;">`;
    } 

    // show/hide content based on user type
    if (currentUser.userType === 'Chief') 
    {
        let chiefContent = document.querySelectorAll('.chief-content');
        chiefContent.forEach(element => 
        {
            element.classList.toggle('show');
        });
        let userContent = document.querySelectorAll('.user-content');
        userContent.forEach(element => {
            element.classList.toggle('hide')
        });
    }
    
    // logout form
    
    
});

