const animation = ScrollReveal({
    distance: '100px',
    duration: 1500,
    delay:400,
    reset:true
})

animation.reveal('.hero-content, .heroimage, .service-content, .about-section',{
    delay: 300,
    origin:'bottom'
})
animation.reveal('.stats-section, .footer-content',{
    delay: 300,
    origin:'right'
})