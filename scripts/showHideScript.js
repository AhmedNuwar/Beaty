function showHideDiv(divId ){
    let hiddenDiv = document.getElementById(divId);
    let pervElment = hiddenDiv.previousElementSibling;
    let nextElment = hiddenDiv.nextElementSibling;
    if(pervElment){
        pervElment.classList.remove('show');
    } 
    if(nextElment){
        nextElment.classList.remove('show');
    } 
    hiddenDiv.classList.toggle('show');
    
}