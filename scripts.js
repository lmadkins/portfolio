// gets modal box div (note, using class of modal, also has id of modal-box)
// const modal = document.querySelector('.modal')

//modal open button
// const openButton = document.querySelector('#open-button')

// modal close button
// const closeButton = document.querySelector('#close-button')

// openButton.addEventListener('click', () => modal.classList.remove('hide'))
//function to open modal

// closeButton.addEventListener('click', () => modal.classList.add('hide'))
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

////////////////////////////////


//ENTRY/CONTACT PAGE
// tab-menu is hidden/display none
// only render entry page
// stretch: animations
// stretch: email form
const entryPage = document.querySelector('#entry-page')

//NAVIGATION and TABS
const tabNav = document.querySelector('#tab-nav')
const tabViews = document.querySelectorAll('.tab-view')
const bioPage = document.querySelector('#bio-page')
const projectPage = document.querySelector('#project-page')

//NAV LINKS
const bioLink = document.querySelector('#button-to-bio')
const projectsLink = document.querySelector('#button-to-projects')
const entryLink = document.querySelector('#button-to-entry')

// NAV BUTTON FUNCIONALITY
// const showProjects = function () {
// }

bioLink.addEventListener('click', () => {
  loadBio()
  console.log('Bio link clicked')
})

projectsLink.addEventListener('click', () => {
  loadProjects()
  console.log('Projects link clicked')
})

entryLink.addEventListener('click', () => {
  loadEntry()
  console.log('Entry link clicked')
})


const loadEntry = function () {
  entryPage.classList.remove('hide')
  bioPage.classList.add('hide')
  projectPage.classList.add('hide')
  // tabNav.classList.add('hide')
  console.log('entry page loaded')
}
loadEntry()

const loadBio = function () {
  entryPage.classList.add('hide')
  bioPage.classList.remove('hide')
  projectPage.classList.add('hide')
  console.log('bio page loaded')
}

const loadProjects = function () {
  entryPage.classList.add('hide')
  bioPage.classList.add('hide')
  projectPage.classList.remove('hide')
  console.log('projects page loaded')
}

//BIO PAGE

// entry page, project page are hidden/display none
// render nav, bio-page
// header fixed on scroll if needed
// resume modal
// stretch: animations
// stretch: email form

// PROJECT PAGE
// entry page, bio page are hidden/display none
// render nav, bio-page
// header fixed on scroll if needed
// modal for each project card
// stretch: animations

