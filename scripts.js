window.onload = () => loadEntry()

function closeModal(element) {
  element.style.display = 'none'
}

const openModal = (element) => {
  element.style.display = 'block'
}

////////////////////////////////
// RESUME MODAL
const resumeModal = document.querySelector('#resume-modal')

const openResumeModal = () => openModal(resumeModal)

const closeResumeModal = () => closeModal(resumeModal)

//open button event
document.querySelector('#open-resume').onclick = openResumeModal

// close button event
document.querySelector('#close-resume').onclick = closeResumeModal

////////////////////////////////
// PROJECT MODALS

//PROJECT 1
const project1Modal = document.querySelector('#project-1-modal')

const openProject1 = () => openModal(project1Modal)
const closeProject1 = () => closeModal(project1Modal)

//open button event
document.querySelector('#open-project-1').onclick = openProject1

//close button event
document.querySelector('#close-project-1').onclick = closeProject1


// PROJECT 2
const project2Modal = document.querySelector('#project-2-modal')

const openProject2 = () => openModal(project2Modal)

const closeProject2 = () => closeModal(project2Modal)

document.querySelector('#open-project-2').onclick = openProject2

document.querySelector('#close-project-2').onclick = closeProject2

// PROJECT 3
const project3Modal = document.querySelector('#project-3-modal')

const openProject3 = () => openModal(project3Modal)

const closeProject3 = () => closeModal(project3Modal)

document.querySelector('#open-project-3').onclick = openProject3

document.querySelector('#close-project-3').onclick = closeProject3 


// PROJECT 4
const project4Modal = document.querySelector('#project-4-modal')

//PROJECT 4 MODAL FUNCTIONS
const openProject4 = () => openModal(project4Modal)

const closeProject4 = () => closeModal(project4Modal)

document.querySelector('#open-project-4').onclick = openProject4

document.querySelector('#close-project-4').onclick = closeProject4

////////////////////////////////

const entryPage = document.querySelector('#entry-page')

const tabNav = document.querySelector('#tab-nav')

const bioPage = document.querySelector('#bio-page')

const projectPage = document.querySelector('#project-page')

const topButton = document.querySelector('#top-button')

////////////////////////////////


const hideEl = (element) => {
  element.style.display = 'none'
}

const showEl = (element) => {
  element.style.display = 'block'
}

// pages/views
const loadEntry = function () {
  hideEl(tabNav)
  hideEl(bioPage)
  hideEl(projectPage)
  showEl(entryPage)
}

const loadBio = function () {
  hideEl(entryPage)
  hideEl(projectPage)
  showEl(tabNav)
  showEl(bioPage)
}

const loadProjects = function () {
  hideEl(topButton)
  hideEl(entryPage)
  hideEl(bioPage)
  showEl(tabNav)
  showEl(projectPage)
}

// scroll to top
function showScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    showEl(topButton)
  }  else {
    hideEl(topButton)
  }
}

function clickToTop () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

////////////////////////////////
// entry links
document.querySelector('#entry-bio-link').addEventListener('click', () => {
    loadBio()
  })

document.querySelector('#entry-projects-link').addEventListener('click',() => {
  loadProjects()
})

// nav links

document.querySelector('#nav-bio-link').addEventListener('click', () => {
  loadBio()
})

document.querySelector('#nav-projects-link').addEventListener('click', () => {
  loadProjects()
})

document.querySelector('#nav-entry-link').addEventListener('click', () => {
  loadEntry()
})

////////////////////////////////
// scroll to top

window.addEventListener('scroll', showScroll) 
topButton.addEventListener('click', clickToTop)