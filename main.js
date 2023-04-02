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
