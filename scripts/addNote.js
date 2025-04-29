document.getElementById("noteForm").addEventListener('submit', function(event){
    event.preventDefault();
    driverNote = document.getElementById('driverNote').value;
    details = document.getElementById('details')
    newNote = document.createElement('li')
    newNote.classList.add('note')
    newNote.innerHTML = driverNote;
    details.appendChild(newNote)
})