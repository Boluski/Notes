let newModalButton = document.querySelector('.body-button');
let newNote = document.querySelector('.new-note');
let newNoteCancelButton = document.querySelector('.button-cancel')

newModalButton.addEventListener('click', () => {
    newNote.style.transform = 'translate(0%, 0%)';
    newNote.style.opacity = '1';
});

newNoteCancelButton.addEventListener('click', () => {
    newNote.style.transform = 'translate(0%, 100%)';
    newNote.style.opacity = '0';
});
