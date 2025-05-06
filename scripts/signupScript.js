window.onload = function(){
    let tabBtnLbl = document.querySelectorAll('.tab-btn');
    console.log(tabBtnLbl);
    tabBtnLbl.forEach(lbl =>{
        if (lbl.classList.contains('active')){
            let cb = lbl.querySelector('input[type="radio"]');
            
            cb.checked = true;
            console.log("checkbox: ", cb,  cb.checked )
        }
        
    })
}

document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the selected user type
        
        
        let userType = document.querySelector('input[name="user-type"]:checked').value;
        console.log(userType)
        let name, email, password, confirmPassword, avatar, phone, nid, bankAccount, walletNo, address, kitchenName;

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
            phone = document.getElementById("chief-phone").value;
            nid = document.getElementById("chief-national-id").value;
            bankAccount = document.getElementById("chief-bank-account").value;
            walletNo = document.getElementById("chief-wallet-number").value;
            address = document.getElementById("chief-address").value;
            kitchenName = document.getElementById("chief-kitchen-name").value;
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
        let newUser;

        if (userType === "User") {
            newUser = {
                name: name,
                email: email,
                password: password,
                userType: userType,
                avatar: avatar
            };
        }
        else if (userType === "Chief") {
            newUser = {
                name: name,
                email: email,
                password: password,
                userType: userType,
                avatar: avatar,
                phone: phone,
                nid: nid,
                bankAccount: bankAccount,
                walletNo: walletNo,
                address: address,
                kitchenName: kitchenName
            };
        }
        console.log(userType)
        // Save the new user to the users array and update localStorage
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to the login page after successful signup
        window.location.href = "Login.html";
    });
});
function clearForm(form) {
    document.getElementById(form).reset();
  }

function checkUserType(id){
    let checkBox = document.getElementById(id);
    if (checkBox){
        checkBox.checked = true;
        console.log('box checked', checkBox, checkBox.checked);
    } 
}