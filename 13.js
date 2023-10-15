// Animate width of .img elements
gsap.to(".img", {
    duration: 2,
    stagger: 2,
    width: "100%",
    ease: Expo.easeInOut,
    repeat: -1,
});

// Animate first set of text animations
gsap.from(".text h1", {
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    top: 0,
    repeat: -1,
});

// Animate second set of text animations
gsap.from(".text h1", {
    ease: Expo.easeInOut,
    stagger: 5,
    top: -100,
    delay: 5,
    repeat: -1,
});
