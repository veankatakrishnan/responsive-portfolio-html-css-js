/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TYPED JS ===============*/
const typed = new Typed('#home-typed', {
    strings: ['an aspiring Web Developer !', 'a Networks Enthusiast !','a Computer &amp; Communication Undergrad'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '',
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== TIME LINE  ===============*/
const progressBar = document.getElementById('progress-bar');
      const timelineComponent = document.querySelector('.timeline__component');
      const timelineSection = document.querySelector('.education');

      function updateProgressBar() {
         if (!timelineComponent || !progressBar || !timelineSection) return;

         // Get the timeline component position
         const componentRect = timelineComponent.getBoundingClientRect();
         const componentTop = componentRect.top + window.scrollY;
         const componentHeight = componentRect.height;
         
         const scrollPosition = window.scrollY;
         const windowHeight = window.innerHeight;

         // Calculate how far we've scrolled into the timeline
         const scrollIntoTimeline = scrollPosition + windowHeight / 2 - componentTop;
         
         // Calculate progress as a percentage of the timeline height
         let progress = (scrollIntoTimeline / componentHeight) * 100;

         // Clamp between 0 and 100
         progress = Math.min(Math.max(progress, 0), 100);

         // Update progress bar height based on actual timeline height
         const actualHeight = (componentHeight * progress) / 100;
         progressBar.style.height = `${actualHeight}px`;
      }

      // Smooth scroll update
      let ticking = false;
      function requestUpdate() {
         if (!ticking) {
            window.requestAnimationFrame(() => {
               updateProgressBar();
               ticking = false;
            });
            ticking = true;
         }
      }

      // Update on scroll
      window.addEventListener('scroll', requestUpdate);
      
      // Update on load
      window.addEventListener('load', updateProgressBar);

      // Update on resize
      window.addEventListener('resize', updateProgressBar);