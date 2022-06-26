window.onload = () => loadEntry()

// MODAL
const modalBox = document.getElementById('modal-box')

//modal open button
const openButton = document.getElementById('open-modal')

// modal close button
const closeButton = document.getElementById('close-button')




// RESUME MODAL FUNCTIONS
// function to open button and change CSS property from display none to display block
const openModal = () => {
  modalBox.style.display = 'block'
}
// function to close button and change CSS property from display block to display none
const closeModal = () => {
  modalBox.style.display = 'none'
}

////////////////////////////////



// const entryPage = document.querySelector('#entry-page')
const entryPage = document.getElementById('entry-page')

//NAVIGATION and TABS
const tabNav = document.querySelector('#tab-nav')
const tabViews = document.querySelectorAll('.tab-view')
// const bioPage = document.querySelector('#bio-page')
const bioPage = document.getElementById('bio-page')
const projectPage = document.getElementById('project-page')

//NAV LINKS
const navBio = document.querySelector('#nav-bio-link')
const navProjects = document.querySelector('#nav-projects-link')
const navEntry = document.querySelector('#nav-entry-link')

// ENTRY BUTTON LINKS
const entryBio = document.querySelector('#entry-bio-link')

const entryProjects = document.querySelector('#entry-projects-link')

//ENTRY/CONTACT PAGE
// stretch: animations
// stretch: email form


const loadEntry = function () {
  tabNav.style.display = 'none'
  entryPage.style.display = 'block'
  bioPage.style.display = 'none'
  projectPage.style.display = 'none'
  console.log('entry page loaded')
}


const loadBio = function () {
  tabNav.style.display = 'block'
  entryPage.style.display = 'none'
  bioPage.style.display = 'block'
  projectPage.style.display = 'none'
  console.log('bio page loaded')
}


const loadProjects = function () {
  tabNav.style.display = 'block'
  entryPage.style.display = 'none'
  bioPage.style.display = 'none'
  projectPage.style.display = 'block'
  console.log('projects page loaded')
}


entryBio.addEventListener('click', () => {
  loadBio()
  console.log('Bio link clicked')
})

entryProjects.addEventListener('click', () => {
  loadProjects()
  console.log('Projects link clicked')
})

// NAV EVENT LISTENERS
navBio.addEventListener('click', () => {
  loadBio()
  console.log('Bio link clicked')
})

navProjects.addEventListener('click', () => {
  loadProjects()
  console.log('Projects link clicked')
})

navEntry.addEventListener('click', () => {
  loadEntry()
  console.log('Entry link clicked')
})

// RESUME MODAL
//event listener to open modal
openButton.addEventListener('click', openModal)

//event listener to close modal
closeButton.addEventListener('click', closeModal)





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


//PROJECT MODAL
const projectModal =  document.querySelectorAll('.project-modal')
const projectClose = document.querySelectorAll('.project-modal-close')

const projectExpand =  document.querySelectorAll('.project-expand')

// projectExpand.forEach(element => {
// element.addEventListener('click', () => projectExpand('project-1-modal'))
// projectModal.style.display = 'block'
// })

const openProject = () => {
  // modalBox.style.display = 'block'
//   projectExpand.forEach(element => {
// element.addEventListener('click', () => projectExpand('project-1-modal'))
// projectModal.style.display = 'block'
// })
for (let i = 0; i < projectExpand.length; i++) {
  projectExpand[i].addEventListener('click', 
  () => {
    projectModal.style.display = 'block'
  })
}
}
// PROJECTS MODAL



//PROJECT MODAL FUNCTIONS
// const openProject = () => {
//   projectModal.style.display = 'block'
// }
const closeProject = () => {
  projectClose.style.display = 'none'
}


