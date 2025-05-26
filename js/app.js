// initalize dom classes and ids

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll('.navbar-menu');
const burger = document.querySelectorAll('.navbar-burger');
const close = document.querySelectorAll('.navbar-close');
const backdrop = document.querySelectorAll('.navbar-backdrop');
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"]');

document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    if(burger.length && menu.length){
        handleMobileMenuToggle(burger, menu)
    }
    if(close.length && backdrop.length && menu.length){
        handleMobileMenuClose(close, backdrop, menu);
    } 
    if(mobileMenuLink.length && menu.length && menu.length){
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
    burger.forEach((burger => {
        burger.addEventListener('click', ()=>{
            menu.forEach((menu)=>{
                menu.classList.toggle('hidden');
            })
        })
    }))
}


function handleMobileMenuClose(close, backdrop, menu) {
    close.forEach((close)=>{
        close.addEventListener('click', ()=>{
            menu.forEach((menu)=>{
                menu.classList.add('hidden');
            })
        })
    })
    backdrop.forEach((backdrop)=>{
        backdrop.addEventListener('click', ()=>{
            menu.forEach((menu)=>{
                menu.classList.add('hidden');
            })
        })
    })
}

function handleMobileMenuLinkClick(mobileMenuLink, navLinks, menu) {
    mobileMenuLink.forEach(anchor =>{
        anchor.addEventListener('click', ()=>{
            navLinks.forEach((link) => {
                link.classList.remove('active');
                const targetLink = document.querySelectorAll(`nav a[href="${this.getAttribute('href')}"]`)
                if(targetLink){
                    targetLink.classList.add('active');
                };
                menu.forEach((menu)=>{
                    menu.classList.add('hidden');
                })
            });
        })
    })
}