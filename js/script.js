function locomotiveAnim(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function loadingAnimation(){
    let tl = gsap.timeline();
    tl.from("#page1",{
    // transform:"scaleX(0.7) scaleY(0.2)"
    opacity:0,
    duration:0.3,
    delay:0.2
})

tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"50px",
    duration:2,
    ease:"expo.out"
    
})

tl.from("nav",{
    opacity:0,
    delay:-0.2
})

tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})

}

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

function page2Animation(){
    let rightElem = document.querySelectorAll(".right-elem");
rightElem.forEach((elem) => {
elem.addEventListener("mouseenter",() => {
   gsap.to(elem.childNodes[3],{
    opacity:1,
    scale:1
   })
})
elem.addEventListener("mouseleave",() => {
   gsap.to(elem.childNodes[3],{
    opacity:0,
    scale:0
   })
})
elem.addEventListener("mousemove",(client) => {
    gsap.to(elem.childNodes[3],{
        x:client.x - elem.getBoundingClientRect().x-50,
        y:client.y - elem.getBoundingClientRect().y-190
        
    })
})
});

}

function page3VideoAnimation(){
    let page3Video = document.querySelector("#page3-play");
let video = document.querySelector("#page3 video");
page3Video.addEventListener("click",() => {
    video.play();
    gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
    })
})
video.addEventListener("click",() => {
    video.pause();
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
        })

})

let mSection = document.querySelectorAll(".page4-sec-right");
mSection.forEach(function(elem){
    elem.addEventListener("mouseenter",() => {
        elem.childNodes[3].style.opacity = 1;

        
    })
    elem.addEventListener("mouseleave",() => {
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load()
        
    })
})


}

function page6Animation(){
    gsap.from("#btm6-part2 h4",{
        x:0,
        duration:1,
     
        scrollTrigger:{
         trigger:"#btm6-part2",
         scroller:"#main",
         start:"top 80%",
         end:"top 10%",
         scrub:true,
        }
     })
}



locomotiveAnim();
loadingAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
page6Animation();


