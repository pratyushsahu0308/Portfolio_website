let text = document.getElementById("text");
let intro1 = document.getElementById("intro1");
let square = document.getElementById("square");

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');
const media = window.matchMedia('(min-width: 701px)');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-thin');
    menuIcon.classList.toggle('fa-caret-down');
    navBar.classList.toggle('active');
    logo.classList.toggle('up');
    intro1.classList.toggle('up');
    text.classList.toggle('up');
    text.style.transition = "all .5s";
}

window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    text.style.marginLeft = -(value * 1.5) + "px";
    text.style.marginTop = -(value * 2) + "px";


})

document.querySelector('body').addEventListener('mousemove', eyeball);
function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientWidth / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)"
    });
}
const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})
sr.reveal('.square', { delay: 350, origin: 'right' });
sr.reveal('.ski,.shadow', { delay: 350, origin: 'bottom' });
sr.reveal('.contact', { delay: 200, origin: 'bottom' });
window.addEventListener("scroll", function () {
    var top = document.getElementById("top");
    top.classList.toggle("active", window.scrollY > 300)
})
window.addEventListener("scroll", function () {
    var top = document.getElementById("light");
    top.classList.toggle("active", window.scrollY <= 300)
})
