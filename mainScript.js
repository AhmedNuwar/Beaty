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

    // set user data
    let userImg = document.getElementById('user-img') || "";
    let userName = document.getElementById('user-name')|| "";
    let userEmail = document.getElementById('user-email')|| "";
    let userPhone = document.getElementById('user-phone')|| "";
    let userAddress = document.getElementById('user-address')|| "";
    let kitchName = document.getElementById('kitchen-name')|| "";
    let bankNo = document.getElementById('bank-number')|| "";
    let walletNo = document.getElementById('wallet-number')|| "";
    let nid = document.getElementById('national-id')|| "";

    if (currentUser){
        userImg.src = `images/${currentUser.avatar}`;
        userName.innerHTML = currentUser.name;
        userEmail.innerHTML = currentUser.email;

        if (currentUser.userType === 'Chief') {
            userPhone.innerHTML = currentUser.phone;
            userAddress.innerHTML = currentUser.address;
            kitchName.innerHTML = currentUser.kitchenName;
            bankNo.innerHTML = currentUser.bankAccount;
            walletNo.innerHTML = currentUser.walletNo;
            nid.innerHTML = currentUser.nid;
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
    }
        
    
        
    
});
function Run(id, url){
    element = document.getElementById(id);
    if(element) element.classList.add('active');
    console.log(element,id, element.classList)
    setTimeout(() => {
        goTo(url);
      }, 100);
}
