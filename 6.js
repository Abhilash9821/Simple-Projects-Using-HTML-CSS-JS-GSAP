var img = document.querySelector(".image");
var container = document.querySelector(".container");

img.addEventListener('mousemove', (e) => {
    var { clientX, clientY } = e;
    var { offsetWidth, offsetHeight } = img;
    var rotateX = (clientY / offsetHeight - 0.5) * 20;
    var rotateY = (clientX / offsetWidth - 0.5) * 20;
    img.style.transition = 'transform 0.3s ease';
    img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

img.addEventListener('mouseout', () => {
    img.style.transition = 'transform 0.3s ease';
    img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});


