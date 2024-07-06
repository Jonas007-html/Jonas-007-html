//const right = document.querySelectorAll(".from-right");
//const left = document.querySelectorAll(".from-left");
//const zoom = document.querySelectorAll(".zoom-in");
//const rotate = document.querySelectorAll(".rotating-star");
//const fly_right = document.querySelectorAll(".content");
gsap.registerPlugin(ScrollTrigger, Observer);

//Nell Beruning
let tl2 = gsap.timeline({});
tl2.set(".from-right", {
    x: '50vw',
})
tl2.to(".from-right", {
	x: '50%' - '25%',
    duration: 2.5,
	ease: "power4.out",
})
tl2.to(".flyout-left", {
    scrollTrigger: {
        trigger: ".flyout-left",
        start: "center 40%",
        end: "center 20%",
        scrub: 1,
    },
    x: '-75vw',
    ease: "power4.out",
    duration: 2,
})
// Oswald von und Schule
let tl3 = gsap.timeline({});
tl3.set(".from-left", {
	x: '-100vw',
})
tl3.to(".from-left", {
	duration: 2.5,
	x: '50%' - '25%',
	ease: "power4.out",
    stagger: .4,
})
let h = window.innerHeight;
function mitte(){
    height =  window.innerHeight 
};
console.log(mitte());
tl3.to(".flyout-right", {
    scrollTrigger: {
        trigger: ".flyout-right",
        start: "top 25%",
        end: "bottom 5%",
        scrub: 1,
    },
    x: '59vw',
    ease: "power4.out",
})
/*
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
*/
gsap.to(".content", {
	scrollTrigger: {
		trigger: ".content",
		start: "center 50%",
		end: "center 30%",
		scrub: 1,
	},
})
/*
gsap.to(".rotating-star", {
	duration: 5,
	rotate: 360,
	repeat: -1,
	ease: "none",
   
})
    */
gsap.to(".scale-up", {
    scrollTrigger: {
        trigger: ".scale-up",
        start: "top 70%",
        end: "bottom 0%",
        scrub: 1,
    },
    scale: 1.7,
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
        trigger: ".reveal-left",
        start: "top 70%",
        end: "center 60%",
        scrub: 1,
    },
    x: '-50vw',
    duration: 4,
})

// detect if touch or not => display moving star or not
if (ScrollTrigger.isTouch === 1) {
    const element = document.getElementById("demo");
    element.remove();
  }
  //
gsap.to(".top-left", {
	scrollTrigger: {
		trigger: ".top-left",
		start: "center 10%",
		end: "bottom 0px",
		scrub: 2,
	},
	duration: 2,
    rotate: 90,
    scale: .4,
    y: '-35%',
})
// menu animations and functions
gsap.set (".link-element", {
    xPercent: 100, 
    opacity: 1,
})

gsap.set (".menu-list-container", {
    xPercent: 100, 
    opacity: 1,
})

function navigation () {
    gsap.to(".menu-list-container", {
        xPercent: -0,
        duration: .9,
        ease: "power3.out",
        stagger: .3,
    });
}

function navigation_staggered_links () {
    gsap.to(".link-element", {
        xPercent: -0,
        duration: .9,
        ease: "power3.out",
        stagger: 0.2,
    });
}

function navigation_staggered_links_back () {
    gsap.to(".link-element", {
        xPercent: 100,
        duration: .9,
        ease: "power3.out",
        stagger: 0.2,
    });
}


function navigation_back () {
    gsap.to(".menu-list-container", {
        xPercent: 100,
        duration: 0,
        ease: "power3.out",
        delay: 1.5,
    });
}

function ReWrite () {
gsap.from(".margin-aside", {
    duration: 0.5, 
    text: "",
    delay: 1,
    stagger: .2,
})
}
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const link = document.querySelector('#link-element');
const reWrite = document.querySelector('.margin-aside')

menuBtn.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links());
});
menuBtn.addEventListener('click', () => {
    menu.classList.add(navigation());
});
menuBtn.addEventListener('click', () => {
    reWrite.classList.add(ReWrite());
});
menu.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
menu.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
// end menu design and functionality



