let newModalButton = document.querySelector('.body-button');
let newModalButtonLarge = document.querySelector('.search-add-button');

let newNote = document.querySelector('.new-note-container');
let newNoteCancelButton = document.querySelector('.button-cancel')

newModalButton.addEventListener('click', () => {
    newNote.style.display = 'flex'
    newNote.style.transform = 'translate(0%, 0%)';
    newNote.style.opacity = '1';
});

newModalButtonLarge.addEventListener('click', () => {
    newNote.style.display = 'flex'
    newNote.style.transform = 'translate(0%, 0%)';
    newNote.style.opacity = '1';
});

newNoteCancelButton.addEventListener('click', () => {
    newNote.style.display = 'none'
    newNote.style.transform = 'translate(0%, 100%)';
    newNote.style.opacity = '0';
});
