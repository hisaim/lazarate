function navAnimation(){
    let nav = document.querySelector('nav');
nav.addEventListener('mouseenter',() => {
    let tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height:"26vh",
    })

    tl.to(".nav-menu h5",{
        display:"block"
    })
    tl.to(".nav-menu span",{
        y:0,      
        stagger:{
            amount:0.9
        }
    })
})
nav.addEventListener('mouseleave',() => {
    let tl = gsap.timeline()
    tl.to(".nav-menu span",{
        y:25,      
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-menu h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.1
    })
})
}

navAnimation();