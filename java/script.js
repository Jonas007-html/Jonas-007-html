gsap.registerPlugin(Observer)
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
/*
Observer.create({
	target: window,
	type: "touch, pointer",
	onDrag: () => {
		document.addEventListener( "touchmove" , (e) => {
			gsap.to(".cursor", {
				x: e.clientX - cursor.offsetWidth / 1.94,
				y: e.clientY - cursor.offsetHeight / 2.15,
				duration: .9,
				ease: "power2.out",
			});
		});
		console.log("touchMove", cursor())
	}
})
	
function mouseEvent (e) {
	gsap.to(".cursor", {
		x: e.clientX - cursor.offsetWidth / 1.94,
		y: e.clientY - cursor.offsetHeight / 2.15,
		duration: .9,
		ease: "power2.out",
	});
}*/

