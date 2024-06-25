const itemArray = [];
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
	gsap.to(cursor, {
		x: e.clientX - cursor.offsetWidth / 2,
		y: e.clientY - cursor.offsetHeight / 2,
		duration: .9,
		ease: "power2.out",
	});
});

const mouseArray = [];
const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {
	gsap.to(mouse, {
		x: e.clientX - cursor.offsetWidth / 11.4,
		y: e.clientY - cursor.offsetHeight / 20,
		duration: 0,
		ease: "power2.out",
	});
});



      