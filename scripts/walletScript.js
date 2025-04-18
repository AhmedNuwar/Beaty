document.addEventListener('DOMContentLoaded', () => {
    const rechargeButton = document.getElementById('rechargeButton');
    const rechargeDiv = document.getElementById('rechargeDiv');

    if (!rechargeButton || !rechargeDiv) {
        console.error('Recharge button or div not found.');
        return;
    }

    rechargeButton.addEventListener('click', () => {
        rechargeDiv.classList.toggle('show');
    });
});
