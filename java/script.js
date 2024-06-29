//bewegung für delay cursor (stern)
const itemArray = [];
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
	gsap.to(cursor, {
		x: e.clientX - cursor.offsetWidth / 1.94,
		y: e.clientY - cursor.offsetHeight / 2.15,
		duration: .9,
		ease: "power2.out",
	});
});
//bewegung für punkt coursor
const mouseArray = [];
const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {
	gsap.to(mouse, {
		x: e.clientX - cursor.offsetWidth / 11.4,
		y: e.clientY - cursor.offsetHeight / 25,
		duration: 0,
		ease: "power2.out",
	});
});
//gsap animations

const right = document.querySelector(".from-right");
const left = document.querySelector(".from-left");
gsap.from(".from-left", {
	duration: 2,
	x: '-100vw',
	ease: "power4.out"
})
gsap.from(right, {
	duration: 2,
	x: '100vw',
	ease: "power4.out"
})

	document.addEventListener('DOMContentLoaded', () => {
		gsap.registerPlugin()
		// gsap code here
		
	})


      