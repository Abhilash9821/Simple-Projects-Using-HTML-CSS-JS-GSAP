var btn=document.querySelector(".btn");
var lg=document.querySelector(".light");
var lg1=document.querySelector(".light1");
var bdy=document.querySelector("body")
x=0;
btn.addEventListener("click",function(){
    if(x==0){
    btn.innerHTML="OFF"
    lg.style.display="block"
    lg1.style.display="block"
    bdy.style.backgroundColor="black"

x=1}
else{
    btn.innerHTML="ON";
    lg.style.display="none";
    lg1.style.display="none";
    bdy.style.backgroundColor="#027da0"
    x=0
}
})
gsap.from(".logo,.nav",{
    y:-100,
    duration:1,
    delay:0.3,
    stagger:0.5,
    // repeat:-1,
    // yoyo:true,
    // scrub:5
})

var rotate = 0;
var det = document.querySelector(".bulb img");

det.addEventListener("mousemove", function(dets) {
    var ms = dets.clientY - det.getBoundingClientRect().top;
    rotate = dets.clientX; 
    gsap.from(".prs", {
        opacity: 1,
        ease: Power3,
        top: ms,
        left: dets.clientX
    });
});

det.addEventListener("mouseleave", function(dets) {
    gsap.to(".prs", {
        opacity: 0,
        ease: Power3,
    });
});


