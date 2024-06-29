


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
	stagger: 0.2,
})


gsap.from(".from-right", {
	duration: 2.5,
	x: '100vw',
	ease: "power4.out",
})
gsap.set(".zoom-in", {
	scale: 0,
})
gsap.fromTo(".zoom-in", {
	scale: 0,
	duration: 2.5,
	delay: 1,
	yoyo: (true),
	repeat: -1,
},{
	scale: 1,
	duration: 2.5,
	delay: 1,
	yoyo: (true),
	repeat: -1,
})

gsap.to(".rotating-star", {
	duration: 5,
	rotate: 360,
	repeat: -1,
	ease: "none",
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
	scrollTrigger: {
		trigger: ".rotating-star",
		start: "center 62%",
		end: "bottom 10px",
		scrub: 1,
	},
	x: '-50vw',
	duration: 8,
    rotate: 360,
    ease: "power4.out"
})

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin()
	// gsap code here
	
})


      