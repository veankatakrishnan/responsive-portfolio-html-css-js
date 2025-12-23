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
    cursorChar: '|',
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
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user') // Get the email input

const sendEmail = (e) => {
    e.preventDefault();

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email field is empty or invalid
    if (contactUser.value === '' || !emailRegex.test(contactUser.value)) {
        // Add and remove color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        // Show message
        contactMessage.textContent = 'Please enter a valid email address.';

        // Remove message after 3 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
            contactMessage.classList.remove('color-red');
        }, 3000);
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_awlyent', 'template_t2omd0r', '#contact-form', '2476rv9b9DiecLFth')
            .then(() => {
                // Show message and add color
                contactMessage.classList.add('color-green');
                contactMessage.textContent = 'Message sent successfully';

                // Remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                    contactMessage.classList.remove('color-green');
                }, 5000);

                // Clear input fields
                contactForm.reset();
            }, (error) => {
                // Show message and add color
                contactMessage.classList.add('color-red');
                contactMessage.textContent = 'Message not sent - Internal Error';
                 // Remove message after 5 seconds
                 setTimeout(() => {
                    contactMessage.textContent = '';
                    contactMessage.classList.remove('color-red');
                }, 5000);
            });
    }
};

contactForm.addEventListener('submit', sendEmail);


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 400,
    reset: false,
    opacity: 0,
    scale: 1,
    easing: 'ease-in-out',
    viewFactor: 0.2
})

sr.reveal('.section__title')
sr.reveal('.section__subtitle', {delay: 200})
sr.reveal('.projects__subtitle', {delay: 300})
sr.reveal('.home__content, .about__container, .education__heading, .timeline__component, .skills__scroller, .projects__container, .contact__container', {delay: 400})
sr.reveal('.home__social, .about__skills, .timeline__skills, .contact__social', {delay: 500, origin: 'bottom'})
sr.reveal('.home__image, .about__image, .timeline__image-wrapper', {delay: 600, origin: 'bottom'})
sr.reveal('.projects__card', {interval: 100})

/*=============== SKILLS SCROLLER ===============*/
const scrollers = document.querySelectorAll(".skills__scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
