//const right = document.querySelectorAll(".from-right");
//const left = document.querySelectorAll(".from-left");
//const zoom = document.querySelectorAll(".zoom-in");
//const rotate = document.querySelectorAll(".rotating-star");
//const fly_right = document.querySelectorAll(".content");
gsap.registerPlugin(ScrollTrigger);

gsap.from(".from-left", {
	duration: 2.5,
	x: '-100vw',
	ease: "power4.out",
	stagger: 0.4,
})
gsap.from(".from-right", {
	duration: 2.5,
	x: '100vw',
	ease: "power4.out",
})
let tl = gsap.timeline({})
tl.set(".zoom-in", {
    opacity: 0,
    scale: 0,
})
tl.to(".zoom-in", {
    scale: 1,
    duration: 2.5,
    delay: 1,
    opacity: 1,
})
tl.to(".flyout-left", {
    scrollTrigger: {
        trigger: ".flyout-left",
        start: "center 50%",
        end: "center 0px",
        scrub: 0.5,
    },
    
    x: '-35vw',
    y: -100,
    duration: 2,
    ease: "power4.out",
    scale: 2,
})
gsap.to(".content", {
	scrollTrigger: {
		trigger: ".content",
		start: "center 50%",
		end: "bottom 10px",
		scrub: 1,
	},
	x: '50vw',
	duration: 2,
    rotate: 20,
    scale: 1.5,
})
gsap.to(".rotating-star", {
	duration: 5,
	rotate: 360,
	repeat: -1,
	ease: "none",
   
})
gsap.to(".scale-up", {
    scrollTrigger: {
        trigger: ".scale-up",
        start: "top 70%",
        end: "bottom 0%",
        scrub: 1,
    },
    scale: 2,
    duration: 3,
})
gsap.from(".reveal-right", {
    scrollTrigger: {
        trigger: ".reveal-right",
        start: "top 90%",
        end: "center 65%",
        scrub: 1,
    },
    x: '60vw',
    duration: 4,
})
gsap.from(".reveal-left", {
    scrollTrigger: {
        trigger: ".reveal-right",
        start: "top 70%",
        end: "center 60%",
        scrub: 1,
    },
    x: '-50vw',
    duration: 4,
})
document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin()
	// gsap code here
	
})
if (ScrollTrigger.isTouch === 1) {
    const element = document.getElementById("demo");
    element.remove();
  }

      