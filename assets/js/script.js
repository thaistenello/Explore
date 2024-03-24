/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLogo = document.getElementById('nav__logo-mobile')

/* Menu show */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navLogo.src = 'assets/img/logoGrey.png'
    })
}
/* Menu hidden */
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navLogo.src = 'assets/img/logoWhite.png'
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
} 
window.addEventListener('scroll', blurHeader)    

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animation repeat
})

sr.reveal('.home__title, .home__subtitle, .home__button')
sr.reveal('.wild__title', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.wild__subtitle', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.join__data', {origin: 'left'})
sr.reveal('.join__image', {origin: 'right'})


