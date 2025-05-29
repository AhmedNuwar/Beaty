function withdraw(event){
    event.preventDefault();
    let amountInput = document.getElementById('withdraw-amount').value;
    let amount = parseInt(amountInput);
    let successMsg = document.getElementById('withdrawSucess');
    let errorMsg = document.getElementById('withdrawError');

    successMsg.classList.remove('hidden');
    if (amount > 3000){
        showMsg(errorMsg.id, false)
    }
    else{
        showMsg(successMsg.id, true)
        let withdrawForm = document.getElementById('withdrawForm');
        withdrawForm.reset();
        showHideDiv('withdraw-div');
    }
}
function showMsg(id, transtion){
    let msg = document.getElementById(id);
    if (msg){
        let allMsg = document.querySelectorAll('.msg')
        allMsg.forEach(Msg =>{
            Msg.classList.remove('hidden')
            Msg.classList.remove('show');
            
        })
        msg.classList.add('show')
        if(transtion){
            setTimeout(() => {
                msg.classList.add('hidden');
            }, 2000);
        }
    }
    
}