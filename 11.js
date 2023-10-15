var sb = document.querySelector(".sidebar");
var menu = document.querySelector("#menu");
var i = document.querySelectorAll("ul li i");
var a = document.querySelectorAll("ul li a");
var btn = document.querySelector("#btn");

var cnt = 0;
var count = 0;

menu.addEventListener("click", function () {
    if (cnt == 0) {
        sb.classList.toggle('active', true);
        sb.style.opacity = 1;
        i.forEach(icon => icon.style.opacity = 1);
        a.forEach(link => link.style.opacity = 1);
        menu.style.backgroundColor = "white";
        menu.style.color = "black";

        cnt = 1;
    } else {
        sb.classList.toggle('active', false);
        sb.style.opacity = 0;
        i.forEach(icon => icon.style.opacity = 0);
        a.forEach(link => link.style.opacity = 0);
        menu.style.backgroundColor = "black";
        menu.style.color = "white";
        cnt = 0;
    }
});

btn.addEventListener("click", function () {
    if (count == 0) {
        sb.style.backgroundColor = "black";
        sb.style.color = "white";
        i.forEach(icon => icon.style.color = "white");
        a.forEach(link => link.style.color = "white");
        btn.style.color = "white";
        count = 1;
    } else {
        sb.style.backgroundColor = "rgba(215, 239, 239, 0.842)";
        sb.style.color = "black";
        i.forEach(icon => icon.style.color = "black");
        a.forEach(link => link.style.color = "black");
        btn.style.color = "black";
        count = 0;
    }
});
