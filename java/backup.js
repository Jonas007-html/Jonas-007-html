




const itemArray = [];
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
	gsap.to(cursor, {
		x: e.clientX - cursor.offsetWidth / 2 + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
		y: e.clientY - cursor.offsetHeight / 2 + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop),
		duration: 0.8,
		ease: "power2.out",
	});
});

const mouseArray = [];
const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {
	gsap.to(mouse, {
		x: e.clientX - cursor.offsetWidth / 11.4 + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
		y: e.clientY - cursor.offsetHeight / 20 + + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop),
		duration: 0,
		ease: "power2.out",
	});
});