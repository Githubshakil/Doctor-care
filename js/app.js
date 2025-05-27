// initalize dom classes and ids

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelector('.navbar-menu');
const burger = document.querySelector('.navbar-burger');
const close = document.querySelector('.navbar-close');
const backdrop = document.querySelector('.navbar-backdrop');
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"]');

document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    if(burger && menu){
        handleMobileMenuToggle(burger, menu)
    }
    if(close && backdrop && menu){
        handleMobileMenuClose(close, backdrop, menu);
    } 
    if(mobileMenuLink.length && menu){
        handleMobileMenuLinkClick(mobileMenuLink, navLinks, menu);
    }
});



function setActiveLink (sections, navLinks) {
let index = sections.length;
// console.log(index);
while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
navLinks.forEach((Link)=>Link.classList.remove('active'))  
   if (navLinks[index]){
    navLinks[index].classList.add('active');
   }

}

function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navlinks = document.querySelectorAll('nav a[href^="#"]');
    setActiveLink(sections, navlinks);
}

function handleMobileMenuToggle(burger, menu) {
    burger.addEventListener('click', ()=>{
        menu.classList.toggle('hidden');
    });
}


function handleMobileMenuClose(close, backdrop, menu) {
    close.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
    backdrop.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
}

function handleMobileMenuLinkClick(mobileMenuLink, navLinks, menu) {
    mobileMenuLink.forEach(anchor => {
        anchor.addEventListener('click', function() {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            const targetLinks = document.querySelectorAll(`nav a[href="${this.getAttribute('href')}"]`);
            targetLinks.forEach((targetLink) => {
                targetLink.classList.add('active');
            });
            menu.classList.add('hidden');
        });
    });
}