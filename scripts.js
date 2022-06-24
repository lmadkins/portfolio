// gets modal box div (note, using class of modal, also has id of modal-box)
const modal = document.querySelector('.modal')

//modal open button
const openButton = document.querySelector('#open-button')

// modal close button
const closeButton = document.querySelector('#close-button')

openButton.addEventListener('click', () => modal.classList.remove('hide'))
//function to open modal


closeButton.addEventListener('click', () => modal.classList.add('hide'))
// function to close modal 



//close modal by clicking outside of the modal window
// window.addEventListener('click', () => {
//   console.log('hi')
//   if (event.target !== modal) {
//     modal.classList.add('hide')
// }})

// maybe make as a separate function and call it here?
// function hideModal(event) {
//  if (event.target !== modal) {
//   modal.classList.add('hide')
//  }
// }