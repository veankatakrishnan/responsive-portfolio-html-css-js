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