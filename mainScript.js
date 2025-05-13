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
    let chiefContent = document.querySelectorAll('.chief-content');
    let userContent = document.querySelectorAll('.user-content');
    let guestContent = document.querySelectorAll('.guest-content');
    let loginContent = document.querySelectorAll('.login-content');


    if (currentUser){
        userImg.src = currentUser.avatar;
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
        if (currentUser.userType == 'User'){
            chiefContent.forEach(element => 
            {
                element.classList.remove('show');
            });
            userContent.forEach(element => {
                element.classList.remove('hide');
            });
            guestContent.forEach(element => {
                element.classList.remove('show');
            });
        loginContent.forEach(element =>{
            element.classList.remove('hide');
        });
        }
        if (currentUser.userType === 'Chief') 
        {
            chiefContent.forEach(element => 
            {
                element.classList.add('show');
            });
            userContent.forEach(element => {
                element.classList.add('hide');
            });
            
        }
    }
    else{
        guestContent.forEach(element => {
                element.classList.toggle('show');
            });
        loginContent.forEach(element =>{
            element.classList.add('hide');
        });
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
document.addEventListener("DOMContentLoaded", function(){
    const kitchenImgs = ['Images/fatta.png', 'Images/bamia.png', 'Images/fteer.png'];
    const learnImgs =  ['Images/GreenSoup.png', 'Images/GoldenCrust.png', 'Images/Kunafa.png'];
    const dealsImgs = ["Images/recipes/7mam.jfif", "Images/recipes/duck.jpg", "Images/recipes/grilledChicken.jpg"]
    let index = 0;
    let landingImg = document.getElementById('landingImg');
    let lrnImg = document.getElementById('lrnCookingImg');
    let dealImg = document.getElementById('dealsImg');
    
    if(kitchenImgs && learnImgs && dealsImgs && landingImg && lrnImg &&dealImg){
        setInterval(() => {
        index = (index + 1) % kitchenImgs.length;
        landingImg.src= kitchenImgs[index];
    }, 2000); 
     setInterval(() =>{
            lrnImg.src = learnImgs[index];
    }, 1500);
    setInterval(() =>{ 
       
            dealImg.src = dealsImgs[index];
    }, 1500);
    }
    
})