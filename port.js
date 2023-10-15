var tl = gsap.timeline();

tl.to(".elem", {
    height: 0,
    duration: 3,
    ease: Expo.easeInOut,
});

tl.to(".green", {
    height: "100%",
    duration: 3,
    delay: -3.1,
    ease: Expo.easeInOut,
});

gsap.to(".parent .child", {
    y: "-190%",
    duration: 2,
    ease: Expo.easeInOut,
});


gsap.to("ul",{
    opacity:"1",
    delay:2
})

gsap.from("a", {
    y: "-100%",
    delay: 2,
    duration: 2,
});

gsap.from(".white ul li", {
    y: "-300%",
    duration: 1,
    stagger:0.2,
    delay: 1.7, 
    ease: Expo.ease,
    scrub:3
});

gsap.from("main", {
    x: "-100%",
    duration: 3,
    ease: Power4.easeInOut,
    stagger: 2,
    delay: 2,
});

gsap.from("img", {
    opacity:0,
    ease:Power4.ease,
    scale:0.9,
    delay: 2,
    duration: 3,
});


gsap.from(".skill",{
    y:"50%",
    opacity:0,
    delay:0.3,
    scrollTrigger: {
        trigger: ".cards",
        start: "top 110%", // Adjust the start position based on your layout
        end: "bottom 100%", // Adjust the end position based on your layout
        scrub: 1, // Smoothly scrub through the animation
    },

})



// Animation for the project title
gsap.from('.project', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.project',
        start: 'top center+=100',
        end: 'bottom center',
        scrub: true,
    },
});




// Animation for the heading
gsap.from('.hdng', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.hdng',
        start: 'top center+=100',
        end: 'bottom center',
        scrub: true,
    },
});

// Animation for the line
gsap.from('.line', {
    height: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.line',
        start: 'top center+=100',
        end: 'bottom center',
        scrub: true,
    },
});

// Animation for the paragraph
gsap.from('.abt p', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.abt p',
        start: 'top center+=100',
        end: 'bottom center',
        scrub: true,
    },
});


gsap.from(".skill-card img", {
    duration: 3,
    y:700,
    stagger:1,
    ease: Power1.ease,
    scrollTrigger: {
        trigger: ".cards",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 1,
    },
});




// Animation for the project list container
gsap.from(".prj .list", {
    opacity: 0,
    y: 50,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".prj .list",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
    },
});

// Animation for the list items
gsap.from(".prj .list ul li", {
    opacity: 0,
    y:500,
    ease: "power2.out",
    stagger: 0.6,
    scrollTrigger: {
        trigger: ".prj .list ul li",
        start: "top 140%",
        end: "bottom 100%",
        scrub: 2,
    },
    
});


window.addEventListener("mousemove",function(dets){
    var xval=gsap.utils.mapRange(0,window.innerWidth,10,window.innerWidth-10,dets.clientX)
    var yval=gsap.utils.mapRange(0,window.innerHeight,10,window.innerHeight-10,dets.clientY+window.scrollY)  
  gsap.to(".container",{
        left:xval+"px",
        top:yval+"px",
        ease:Circ,
       
    });
});





