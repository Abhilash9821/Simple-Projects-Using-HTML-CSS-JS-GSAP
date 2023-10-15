document.addEventListener("DOMContentLoaded", function () {
    const goToAboutButton = document.getElementsByClassName(".btn1");

    goToAboutButton.addEventListener("click", function () {
        window.location.href = "2.html";
    });
});

const anim=gsap.to(".pannel",{
    rotate:360,
    scrub:5,
    duration:1,
    // delay:1,
    scale:0.2,
    repeat:1,
    yoyo:true,
});

    const tri={
        scroller:"body",
        trigger:".pannel",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
    
    onEnter: () => {
        anim.play();
    },
    onLeaveBack: () => {
        anim.reverse()
    },
    }

    gsap.timeline({
        scrollTrigger: tri,
    });

gsap.from(".main",{
    y:-9000,
    delay:0.5,
    duration:1,
    

})


// Define the GSAP animation timeline
const animation = gsap.to(".container1", {
    scale: 0.5,
    repeat: 1,
    yoyo: true,
    duration: 1,
    scrub: 5,
});

// Create a ScrollTrigger
const trigger = {
    scroller: "body",
    trigger: ".container1",
    start: "top 30%",
    end: "bottom 30%",
    onEnter: () => {
        // Play the animation forward when entering the trigger
        animation.play();
    },
    onLeaveBack: () => {
        // Reverse the animation when leaving the trigger and scrolling back up
        animation.reverse();
    },
};

gsap.timeline({
    scrollTrigger: trigger,
});




gsap.from("h1,h2,p",{
    x:-10000,
    delay:1,
    stagger:0.5,
    duration:1
})