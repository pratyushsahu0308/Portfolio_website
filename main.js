let text = document.getElementById("text");
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
}
window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    text.style.marginLeft = -(value * 2) + "px";
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
sr.reveal('.intro', { delay: 350, origin: 'left' });
sr.reveal('.square', { delay: 350, origin: 'right' });
sr.reveal('.ski,.shadow', { delay: 350, origin: 'bottom' });
sr.reveal('.contact', { delay: 200, origin: 'bottom' });
sr.reveal('#footer', { delay: 200, origin: 'bottom' });
