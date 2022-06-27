window.onload = () => loadEntry()

// RESUME MODAL
const resumeModal = document.getElementById('resume-modal')

//open button
const openResume = document.getElementById('open-resume')

// close button
const closeResume = document.getElementById('close-resume')

// RESUME MODAL FUNCTIONS
// function to open button and change CSS property from display none to display block
const openResumeModal = () => {
  resumeModal.style.display = 'block'
}
// function to close button and change CSS property from display block to display none
const closeResumeModal = () => {
  resumeModal.style.display = 'none'
}

////////////////////////////////
// PROJECT MODALS

//PROJECT 1
const project1Modal = document.getElementById('project-1-modal')

//open button
 const openProject1Modal = document.getElementById('open-project-1')

//close button
const closeProject1Modal = document.getElementById('close-project-1')

//PROJECT 2
const project2Modal = document.getElementById('project-2-modal')

const openProject2Modal = document.getElementById('open-project-2')

const closeProject2Modal = document.getElementById('close-project-2')


//PROJECT 3
const project3Modal = document.getElementById('project-3-modal')

const openProject3Modal = document.getElementById('open-project-3')

const closeProject3Modal = document.getElementById('close-project-3')

// PROJECT 1 MODAL FUNCTIONS
const openProject1 = () => {
  project1Modal.style.display = 'block'
}
const closeProject1 = () => {
  project1Modal.style.display = 'none'
}

//PROJECT 2 MODAL FUNCTIONS
const openProject2 = () => {
  project2Modal.style.display = 'block'
}

const closeProject2 = () => {
  project2Modal.style.display = 'none'
}

//PROJECT 3 MODAL FUNCTIONS
const openProject3 = () => {
  project3Modal.style.display = 'block'
}

const closeProject3 = () => {
  project3Modal.style.display = 'none'
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

////////////////////////////////
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


////////////////////////////////
// ENTRY EVENT LISTENERS
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


// RESUME MODAL EVENT LISTENERS
//event listener to open resume modal
openResume.addEventListener('click', openResumeModal)

//event listener to close resume modal
closeResume.addEventListener('click', closeResumeModal)


// PROJECT MODAL EVENT LISTENERS

// PROJECT 1
//event listener to open modal
openProject1Modal.addEventListener('click', openProject1)

//event listener to close modal
closeProject1Modal.addEventListener('click', closeProject1)

// PROJECT 2
openProject2Modal.addEventListener('click', openProject2)

closeProject2Modal.addEventListener('click', closeProject2)

// PROJECT 3

openProject3Modal.addEventListener('click', openProject3)

closeProject3Modal.addEventListener('click', closeProject3)


////////////////////////////////
//EXPERIMENTAL AREA

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
// const projectModal =  document.querySelectorAll('.project-modal')
// const projectClose = document.querySelectorAll('.project-modal-close')

// const projectExpand =  document.querySelectorAll('.project-expand')

// projectExpand.forEach(element => {
// element.addEventListener('click', () => projectExpand('project-1-modal'))
// projectModal.style.display = 'block'
// })

/* 
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
//   })
// }
// }
// PROJECTS MODAL



//PROJECT MODAL FUNCTIONS
// const openProject = () => {
//   projectModal.style.display = 'block'
// }
const closeProject = () => {
  projectClose.style.display = 'none'
// }

*/
