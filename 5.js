// Box 1
var ch = document.querySelector(".box1");
var textElement1 = ch.querySelector("h4");
var btn1 = document.querySelector(".btn1");
var x1 = localStorage.getItem("box1State") || 0;

updateBox1();

ch.addEventListener("click", function () {
    x1 = 1 - x1; // Toggle the state
    updateBox1();
    localStorage.setItem("box1State", x1); // Store the state in localStorage
});

function updateBox1() {
    if (x1 == 0) {
        textElement1.style.color = "green";
        textElement1.innerHTML = "Friends";
        btn1.innerHTML = "Unfollow";
        textElement1.style.fontSize = "16px";
    } else {
        textElement1.innerHTML = "Stranger";
        btn1.innerHTML = "Follow";
        textElement1.style.color = "rgb(255, 105, 105)";
    }
}

// Box 2
// (Repeat the same approach for Box 2 and 3)
var ch1 = document.querySelector(".box2");
var textElement2 = ch1.querySelector("h4");
var btn2 = document.querySelector(".btn2");
var x2 = localStorage.getItem("box2State") || 0;

updateBox2();

ch1.addEventListener("click", function () {
    x2 = 1 - x2;
    updateBox2();
    localStorage.setItem("box2State", x2);
});

function updateBox2() {
    if (x2 == 0) {
        textElement2.style.color = "green";
        textElement2.innerHTML = "Friends";
        btn2.innerHTML = "Unfollow";
        textElement2.style.fontSize = "16px";
    } else {
        textElement2.innerHTML = "Stranger";
        btn2.innerHTML = "Follow";
        textElement2.style.color = "rgb(255, 105, 105)";
    }
}

var ch2 = document.querySelector(".box3");
var textElement3 = ch2.querySelector("h4");
var btn3 = document.querySelector(".btn3");
var x3 = localStorage.getItem("box3State") || 0;

updateBox3();

ch2.addEventListener("click", function () {
    x3 = 1 - x3;
    updateBox3();
    localStorage.setItem("box3State", x3);
});

function updateBox3() {
    if (x3 == 0) {
        textElement3.style.color = "green";
        textElement3.innerHTML = "Friends";
        btn3.innerHTML = "Unfollow";
        textElement3.style.fontSize = "16px";
    } else {
        textElement3.innerHTML = "Stranger";
        btn3
        .innerHTML = "Follow";
        textElement3.style.color = "rgb(255, 105, 105)";
    }
}
