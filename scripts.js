window.onload = () => loadEntry()

////////////////////////////////
// RESUME MODAL
const resumeModal = document.querySelector('#resume-modal')

const openResumeModal = () => {
  resumeModal.style.display = 'block'
}
const closeResumeModal = () => {
  resumeModal.style.display = 'none'
}

//open button event
document.querySelector('#open-resume').onclick = openResumeModal

// close button event
document.querySelector('#close-resume').onclick = closeResumeModal

////////////////////////////////
// PROJECT MODALS

//PROJECT 1
const project1Modal = document.querySelector('#project-1-modal')

const openProject1 = () => {
  project1Modal.style.display = 'block'
}
const closeProject1 = () => {
  project1Modal.style.display = 'none'
}

//open button event
document.querySelector('#open-project-1').onclick = openProject1

//close button event
document.querySelector('#close-project-1').onclick = closeProject1


// PROJECT 2
const project2Modal = document.querySelector('#project-2-modal')

const openProject2 = () => {
  project2Modal.style.display = 'block'
}

const closeProject2 = () => {
  project2Modal.style.display = 'none'
}

document.querySelector('#open-project-2').onclick = openProject2

document.querySelector('#close-project-2').onclick = closeProject2

// PROJECT 3
const project3Modal = document.querySelector('#project-3-modal')

const openProject3 = () => {
  project3Modal.style.display = 'block'
}

const closeProject3 = () => {
  project3Modal.style.display = 'none'
}

document.querySelector('#open-project-3').onclick = openProject3

document.querySelector('#close-project-3').onclick = closeProject3 


// PROJECT 4
const project4Modal = document.querySelector('#project-4-modal')

//PROJECT 4 MODAL FUNCTIONS
const openProject4 = () => {
  project4Modal.style.display = 'block'
}

const closeProject4 = () => {
  project4Modal.style.display = 'none'
}
document.querySelector('#open-project-4').onclick = openProject4

document.querySelector('#close-project-4').onclick = closeProject4


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

// SCROLL TO TOP BUTTON
const topButton = document.getElementById('top-button')

////////////////////////////////
// FUNCTIONS
const loadEntry = function () {
  tabNav.style.display = 'none'
  entryPage.style.display = 'block'
  bioPage.style.display = 'none'
  projectPage.style.display = 'none'
}

const loadBio = function () {
  tabNav.style.display = 'block'
  entryPage.style.display = 'none'
  bioPage.style.display = 'block'
  projectPage.style.display = 'none'
}

const loadProjects = function () {
  tabNav.style.display = 'block'
  entryPage.style.display = 'none'
  bioPage.style.display = 'none'
  projectPage.style.display = 'block'
}

// SCROLL TO TOP BUTTON
function scrollButtonFunction() {
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    topButton.style.display = "block"
  }  else {
    topButton.style.display = "none"
  }
}

// scroll to the top of the button when clicked
function clickToTop () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

////////////////////////////////
// ENTRY EVENT LISTENERS
entryBio.addEventListener('click', () => {
  loadBio()
})

entryProjects.addEventListener('click', () => {
  loadProjects()
})

// NAV EVENT LISTENERS

navBio.addEventListener('click', () => {
  loadBio()
})

navProjects.addEventListener('click', () => {
  loadProjects()
})

navEntry.addEventListener('click', () => {
  loadEntry()
})

window.addEventListener('scroll', scrollButtonFunction) 
topButton.addEventListener('click', clickToTop)