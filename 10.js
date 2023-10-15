document.addEventListener("DOMContentLoaded", function () {
    var main = document.querySelector("main");
    var bdy = document.querySelector(".body");
    var he = document.querySelector(".body .f");
    var he1 = document.querySelector(".body .s");
    var btn = document.querySelector(".body button");
    var cnt = 0;

    bdy.addEventListener("click", function () {
        if (cnt == 0) {
            gsap.to(btn, {
                left: "calc(100% - 290px - 10px)",
                backgroundColor: "black",
                duration: 2,
                ease: "bounce"
            });
            bdy.style.backgroundColor = "grey";
            he.style.color="white"
            he1.style.color="white"
            main.style.backgroundColor="black"
            bdy.style.backgroundImage = "url('/images/night.webp')"; // Change to night image
            cnt = 1;
        } else {
            gsap.to(btn, {
                left: "10px",
                backgroundColor: "white",
                duration: 2,
                ease: "bounce"
            });
            bdy.style.backgroundColor = "white";
            main.style.backgroundColor="rgba(0, 255, 255, 0.326)"
            he.style.color="black"
            he1.style.color="black"
            bdy.style.backgroundImage = "url('/images/day.webp')"; // Change to day image
            cnt = 0;
        }
    });
});
