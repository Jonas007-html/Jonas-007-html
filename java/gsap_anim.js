//const right = document.querySelectorAll(".from-right");
//const left = document.querySelectorAll(".from-left");
//const zoom = document.querySelectorAll(".zoom-in");
//const rotate = document.querySelectorAll(".rotating-star");
//const fly_right = document.querySelectorAll(".content");
//gsap.registerPlugin(ScrollTrigger, Observer,);

gsap.registerPlugin(ScrollTrigger,Observer);
//Nell Beruning
/*
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
})*/
// Oswald von und Schule
/*
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

tl3.to(".flyout-right", {
    scrollTrigger: {
        trigger: ".flyout-right",
        start: "top 25%",
        end: "bottom 5%",
        scrub: 1,
    },
    x: '59vw',
    ease: "power4.out",
})*/
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
/*
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
        markers: true,
    },
    x: '-50vw',
    duration: 4,
})
*/
// detect if touch or not => display moving star or not
if (ScrollTrigger.isTouch === 1) {
    const element = document.getElementById("demo");
    element.remove();
  }
  // end
// logo animation je nach display größe
/*
  let mm = gsap.matchMedia();
  mm.add({
      isMobile: "(max-width: 500px)",
      isDesktop: "(min-width: 501px)",
  }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      gsap.to(".top-left", {
        scrollTrigger: {
            trigger: ".top-left",
            start: "center 7%",
            end: "bottom 0px",
            scrub: 2,
        },
        duration: 2,
        rotate: 90,
        scale: isDesktop ? .4 : .7,
        y: isDesktop ? '-35%' : '-20%',
    })
  })
    */
/*
gsap.to(".top-left", {
	scrollTrigger: {
		trigger: ".top-left",
		start: "center 7%",
		end: "bottom 0px",
		scrub: 2,
	},
	duration: 2,
    rotate: 90,
    scale: .4,
    y: '-35%',
})*/
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
// da query selector nicht für alle funktioniert jedes elemt einzeln ansteuern
const links0 = document.querySelector(".clickOnMe0");
const links1 = document.querySelector(".clickOnMe1");
const links2 = document.querySelector(".clickOnMe2");
const links3 = document.querySelector(".clickOnMe3");
const links4 = document.querySelector(".clickOnMe4");
const links5 = document.querySelector(".clickOnMe5");
const links6 = document.querySelector(".clickOnMe6");
const links7 = document.querySelector(".clickOnMe7");
const links8 = document.querySelector(".clickOnMe8");
const links9 = document.querySelector(".clickOnMe9");
const links10 = document.querySelector(".clickOnMe10");
const links11 = document.querySelector(".clickOnMe11");
const links12 = document.querySelector(".clickOnMe12");
const links13 = document.querySelector(".clickOnMe13");
// ende
const reWrite = document.querySelector('.margin-aside');


menuBtn.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links());
});
menuBtn.addEventListener('click', () => {
    menu.classList.add(navigation());
});
menuBtn.addEventListener('click', () => {
    reWrite.classList.add(ReWrite());
});

// always the same but other element
links0.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links0.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links1.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links1.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links2.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links2.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links3.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links3.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links4.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links4.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links5.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links5.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links6.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links6.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});

links7.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links7.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
links8.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links8.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
links9.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links9.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
links10.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links10.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
links11.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links11.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
links12.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links12.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});
links13.addEventListener('click', () => {
    link.classList.add(navigation_staggered_links_back());
});
links13.addEventListener('click', () => {
    menu.classList.add(navigation_back());
});






// end menu design and functionality
//start of open links over js with delay
function openW3Schools () {
    var myWindow = window.open("https://www.w3schools.com/jsref/met_win_open.asp", "_self");
}

function openHome () {
    var myWindow = window.open("index.html", "_self");
}
// end links
//start overlay
const verlinkungIcon = document.querySelector('.top-left');
const verlinkung1 = document.querySelector('.nav-link1');
const verlinkung2 = document.querySelector('.nav-link2');
const verlinkung3 = document.querySelector('.nav-link3');
const verlinkung4 = document.querySelector('.nav-link4');
const verlinkung5 = document.querySelector('.nav-link5');
const square = document.querySelector('.square');

    gsap.to(".square", {
        duration: .5,
        opacity: 0,
        scale: .1,
        stagger: {
            amount: .9,
            from: "random",
            grid: [8, 8],
        },
        ease: "power1.out",
        delay: .5,
    })

    function startOverlay () {
        var zuUndAuf = gsap.timeline({});
        zuUndAuf.to(".square", {
            duration: .5,
            opacity: 1,
            scale: 1.1,
            stagger: {
                amount: .9,
                from: "random",
                grid: [8, 8],
            },
            ease: "power1.out",
        });
        zuUndAuf.to(".square", {
            duration: .5,
            opacity: 0,
            scale: .1,
            stagger: {
                amount: .9,
                from: "random",
                grid: [8, 8],
            },
            ease: "power1.out",
            delay: 1,
        })

    }

    verlinkung1.addEventListener('click', () => {
        square.classList.add(startOverlay());
    });
    verlinkung2.addEventListener('click', () => {
        square.classList.add(startOverlay());
    });
    verlinkung3.addEventListener('click', () => {
        square.classList.add(startOverlay());
    });
    verlinkung4.addEventListener('click', () => {
        square.classList.add(startOverlay());
    });
    verlinkung5.addEventListener('click', () => {
        square.classList.add(startOverlay());
    });
    verlinkungIcon.addEventListener('click', () => {
        square.classList.add(startOverlay());
    })
    
// end overlay

// start fade text up
    var headlineContent = document.getElementById('main-header');
    headlineContent.innerHTML = "<span class='new'>" +
    headlineContent.innerHTML.split("").join("</span><span class='new'>") + "</span>"
    var headChar = document.getElementsByClassName("new");
    gsap.from(headChar, {
        yPercent: 100,
        stagger: .07,
        duration: 2,
        delay: 1,
        ease: "power4.out"
    });

    var headerAdd1 = document.getElementById('header-add1');
    headerAdd1.innerHTML = "<span class='char1'>" +
    headerAdd1.innerHTML.split("").join("</span><span class='char1'>") + "</span>"
    var char1 = document.getElementsByClassName('char1');
    gsap.from(char1, {
        yPercent: 100,
        stagger: .07,
        duration: 2,
        delay: 1,
        ease: "power4.out"
    });
    var headerAdd2 = document.getElementById('header-add2');
    headerAdd2.innerHTML = "<span class='char2'>" +
    headerAdd2.innerHTML.split("").join("</span><span class='char2'>") + "</span>"
    var char2 = document.getElementsByClassName('char2');
    gsap.from(char2, {
        yPercent: 100,
        stagger: .07,
        duration: 2,
        delay: 1,
        ease: "power4.out"
    });
// end text fade up   
//start menu switch up and down
    var menuText1 = document.getElementById('menu-txt1');
    var menuText2 = document.getElementById('menu-txt2');
    var menuButton = document.getElementById('menu-btn');

        menuButton.addEventListener("mouseover", () => {
            gsap.to(menuText1, {
                yPercent: 100,
                duration: .5,
                ease: "power4.out",
            });
            gsap.to(menuText2, {
                yPercent: 100,
                duration: .5,
                ease: "power4.out",
            })
        });
        menuButton.addEventListener("mouseleave", () => {
            gsap.to(menuText1, {
                yPercent: 0, 
                duration: .5,
                ease: "power4.out",
            });
            gsap.to(menuText2, {
                yPercent: 0,
                duration: .5,
                ease: "power4.out",
            })
        });
//end menu switch up and down
//start logo zoom on hover
var logo = document.getElementById('logo');
var icon = document.getElementById('logo-icon');
        
        icon.addEventListener('mouseover', () => {
            gsap.to(icon, {
                rotate: 0,
                ease: 'power2.out',
                duration: 1,
                scale: 1.4,
            })
        })
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                rotate: 90,
                ease: 'power2.out',
                duration: .7,
                scale: 1,
            })
        })
        
//start change backgroundcolor while scrolling
var test = document.getElementById("test");

document.onscroll = function() {

		scrollTop = window.pageYOffset;
    
    allDivs = document.getElementsByTagName('div');

    for( i=0; i< allDivs.length; i++ )
    {
    		curDiv = allDivs[i];
        
        
        // The code below makes the background color change when the 						scroll top passes the 2/3 of the previous div.
        
        heightBefore = 0;    
        if (i > 0){
        		heightBefore = allDivs[i-1].offsetHeight / .5;
        }
        
        if (scrollTop > curDiv.offsetTop - heightBefore){
        		color = curDiv.getAttribute("data-color");
          	document.body.style.background = color;
        }
                
    }
};


//start autoscroll vertical text
/*
var scrollSection = document.getElementById('autoscroll');
let scrollPosition = 0;
let scrollSpeed = 2;
let animationId;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function autoScroll() {
    scrollPosition += scrollSpeed;
    scrollSection.scrollTo({left: scrollPosition, behavior: 'smooth',});
    
    if (scrollPosition < scrollSection.scrollWidth) {
        animationId = requestAnimationFrame(autoScroll);
      }
      await sleep(50);
}

animationId = requestAnimationFrame(autoScroll);
setInterval(autoScroll(), 10)
// await sleep(0);  
*/

/*let scrollTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
});
let childTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
});

scrollTl.fromTo(babies,{
    xPercent: 0,
} ,{
    xPercent: -100,
    duration: 5,
    ease: 'linear',
})

scrollTl.fromTo(babies, {
    xPercent: 100,
    ease: 'linear',
    duration: 0,
},{
        xPercent: 0,
        duration: 5,
        ease: 'linear',
})
*/
/*
scrollTl.set(babies, {
    xPercent: 0,
});

scrollTl.to(babies, {
    xPercent: -100,
    duration: 2,
    ease: 'linear'
});

scrollTl.set(babies, {
    xPercent: 100,
})
  
scrollTl.set(babies, {
    xPercent: 100,
})
scrollTl.to(babies, {
    xPercent: -100,
    duration: 5,
    ease: 'linear',
})
childTl.set(child, {
    xPercent: -50,
})
childTl.to(child, {
    xPercent: -200,
    duration: 5,
    ease: 'linear',
    delay: 5
})

let scrollSection = document.getElementById('autoscroll');
let scrollPosition = 0;
*/

/*
Observer.create({
    target: window,
    type: 'wheel,touch,pointer',
    onDown: () => {
        babies_2.style.animationName = "scroll-reverse";
    },
    onUp: () => {
        babies_2.style.animationName = "scroll";
    }
})

/*
setInterval(
    function info() {
       // console.log(babies)
    }, 100);


let babies = document.querySelectorAll("#baby")

/*
gsap.registerEffect({
    name: 'scrolling',
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration, 
            xPercent: -101,
            ease: 'linear',
            onComplete: () => {
                let putElementsInside = document.getElementById('autoscroll');
                //putElementsInside.firstElementChild.remove();
            }
        });
      },
      defaults: {duration: 5,}
})

/*
setInterval(function creation() {
    let putElementsInside = document.getElementById('autoscroll');
    const divAround = document.createElement('div');
        divAround.classList.add('baby');
        divAround.setAttribute('id', 'baby');
        
    putElementsInside.appendChild(divAround);

    const divInside = document.createElement('h1');
    divInside.innerHTML = 'kompetent und alles andere';
    divAround.appendChild(divInside);
    //const clonedDiv = divAround.cloneNode(true);
    //putElementsInside.appendChild(clonedDiv);
    let babies = document.querySelectorAll("#baby");
    babies.forEach(() => {
        gsap.effects.scrolling(babies);
    });
    console.log(putElementsInside.firstElementChild);
    putElementsInside.firstElementChild.remove();

}, 4000)

babies.forEach(() => {
    gsap.effects.scrolling(babies);
}) 
*/
/*
babies.forEach(() => {
    gsap.effects.scrolling(babies);
});
/*
function newElement() {
    let putElementsInside = document.getElementById('autoscroll');
    const divAround = document.createElement('div');
        divAround.classList.add('baby');
        divAround.setAttribute('id', 'baby');
    
        putElementsInside.appendChild(divAround);

    const divInside = document.createElement('h1');
    divInside.innerHTML = 'kompetent und alles andere';
    divAround.appendChild(divInside);
    //const clonedDiv = divAround.cloneNode(true);
    //putElementsInside.appendChild(clonedDiv);
    let babies = document.querySelectorAll("#baby");
    let latest = babies.lastElementChild;
    gsap.effects.scrolling(latest);
    /*
    babies.forEach(() => {
        gsap.effects.scrolling(latest);
    });
    
    console.log(putElementsInside.lastElementChild);
}
*/
/*
setInterval(function refresh () {
    let putElementsInside = document.getElementById('autoscroll');
    //let secondBaby = putElementsInside.children[0];
    let secondBaby = putElementsInside.lastElementChild;
    let rect = secondBaby.getBoundingClientRect();
    console.log (rect.right);
    if(rect.right <= window.innerWidth){
        newElement();
        if(rect.right <= 0){
        let putElementsInside = document.getElementById('autoscroll');
        putElementsInside.firstElementChild.remove();
        console.log('removed');
        }
    };
}, 100)

*/
/*
let scrollEffectForward = gsap.registerEffect({
                            name: 'scrolling',
                            effect: (targets, config) => {
                            return gsap.fromTo(targets, {
                                duration: config.duration,
                                xPercent: 0,
                                ease: 'linear',
                                onComplete: () => {
                                //targets.forEach(target => target.remove());
                                //createBabyElement();
                                console.log('completed')
                                }
                            }, {
                                xPercent: -200,
                                duration: config.duration,
                                ease: 'linear'
                            });
                            },
                            defaults: { duration: 5 }
                        });
*/
gsap.config({
    units: {
        x: 'px'
    }
})

let scrollEffectForward = gsap.registerEffect({
                            name: 'scrolling',
                            effect: (targets, config) => {
                            return  gsap.to(targets, {
                                duration: config.duration,
                                xPercent: -200,
                                ease: 'linear',
                                onComplete: () => {
                                //targets.forEach(target => target.remove());
                                //createBabyElement();
                                console.log('completed')
                                }
                            });
                            },
                            defaults: { duration: 5 }
                        });



let scrollEffectReward = gsap.registerEffect({
                            name: 'scrollingReward',
                            effect: (targets, config) => {
                            return gsap.to(targets, {
                                duration: config.duration,
                                xPercent: 200,
                                ease: 'linear',
                                onComplete: () => {
                                console.log('completed')
                                }
                            });
                            },
                            defaults: { duration: 5 }
                        });

const autoscrollContainer = document.getElementById('autoscroll');
const createBabyElement = () => {
  const babyElement = document.createElement('div');
  babyElement.classList.add('baby');
  babyElement.setAttribute('id', 'baby');

  const textElement = document.createElement('h1');
  textElement.textContent = 'Kompetenzen - Chancen - Vielfalt -';
  babyElement.appendChild(textElement);

  autoscrollContainer.appendChild(babyElement);
  /*

  var scrollEffectForward = gsap.to(babyElement, {
                                duration: 5,
                                x: -4000,
                                ease: 'linear',
                                onComplete: () => {
                                //targets.forEach(target => target.remove());
                                //createBabyElement();
                                console.log('completed')
                                }
                                });
                                */
  gsap.effects.scrolling(babyElement, { duration: 30 });
};
createBabyElement();
//setInterval(createBabyElement(), 100)
/*
gsap.registerEffect({
  name: 'scrolling',
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      xPercent: -200,
      ease: 'linear',
      onComplete: () => {
        //targets.forEach(target => target.remove());
        createBabyElement();
        console.log('completed')
      }
    });
  },
  defaults: { duration: 5 }
});
*/



const refreshInterval = setInterval(() => {
  const lastBabyElement = autoscrollContainer.lastElementChild;
  
    const rect = lastBabyElement.getBoundingClientRect();
    //console.log(Math.round(rect.right));
    //console.log(Math.round(window.innerWidth));
    //console.log(autoscrollContainer.lastElementChild.clientWidth)
    const totalWidth =  window.innerWidth;
    if (rect.right <= totalWidth) {
      createBabyElement();
      console.log('creation')
    }
}, 200)
setInterval(deleteTrash, 500)
function deleteTrash() {
    const autoscroll = document.querySelector('#autoscroll')
    if (autoscroll.childElementCount >= 3) {
        autoscroll.removeChild(autoscroll.children[0]);
        console.log('removed')
     }
    console.log(autoscroll.childElementCount)
};

Observer.create({
    target: window,
    type: 'wheel,touch,pointer',
    onDown: () => {
        let kleinkind = document.getElementsByClassName("baby")
        //gsap.effects.scrolling(kleinkind);
        //scrollEffectForward.reverse()
    },
    onUp: () => {
        let kleinkind = document.getElementsByClassName("baby");
        
            //gsap.effects.scrollEffectForward.kill();
            //gsap.effects.scrollingReward(kleinkind);
          
        //gsap.effects.scrollingReward(kleinkind);
        //scrolling.reverse()
        console.log('REVERSE');
        
    }
})

/*
const autoscrollContainer = document.getElementById('autoscroll');

const createBabyElement = () => {
  const babyElement = document.createElement('div');
  babyElement.classList.add('baby');
  babyElement.setAttribute('id', 'baby');

  const textElement = document.createElement('h1');
  textElement.textContent = 'Kompetenzen - Chancen - Vielfalt -';
  babyElement.appendChild(textElement);

  autoscrollContainer.appendChild(babyElement);

  const scrollEffectForward = gsap.to(babyElement, {
    duration: 5,
    x: -4000,
    ease: 'linear',
    onComplete: () => {
      console.log('completed');
    }
  });
};

createBabyElement();

const refreshInterval = setInterval(() => {
  const lastBabyElement = autoscrollContainer.lastElementChild;

  if (lastBabyElement) {
    const rect = lastBabyElement.getBoundingClientRect();
    const totalWidth = window.innerWidth;

    if (rect.right <= totalWidth) {
      createBabyElement();
      console.log('creation');
    }
  }
}, 200);

setInterval(deleteTrash, 500);

function deleteTrash() {
  const autoscroll = document.querySelector('#autoscroll');

  if (autoscroll.childElementCount >= 3) {
    autoscroll.removeChild(autoscroll.children[0]);
    console.log('removed');
  }

  console.log(autoscroll.childElementCount);
}

Observer.create({
  target: window,
  type: 'wheel,touch,pointer',
  onDown: () => {
    const kleinkind = document.getElementsByClassName("baby");
    Array.from(kleinkind).forEach(element => {
      gsap.to(element, { 
        duration: 5, 
        x: 1000 
        });
    });
  },
  onUp: () => {
    const kleinkind = document.getElementsByClassName("baby");
    Array.from(kleinkind).forEach(element => {
      gsap.to(element, { duration: 5, x: -1000 });
    });
  }
});
*/