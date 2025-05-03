function withdraw(event){
    event.preventDefault();
    let amountInput = document.getElementById('withdraw-amount').value;
    let amount = parseInt(amountInput);
    let successMsg = document.getElementById('withdrawSucess');
    let errorMsg = document.getElementById('withdrawError');

    successMsg.classList.remove('hidden');
    if (amount > 12000){
        errorMsg.classList.add('show');
        successMsg.classList.remove('show');
    }
    else{
        successMsg.classList.add('show');
        errorMsg.classList.remove('show');
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 2000);
        
        let withdrawForm = document.getElementById('withdrawForm');
        withdrawForm.reset();
        showHideDiv('withdraw-div');
    }
}
