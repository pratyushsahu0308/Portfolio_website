let text = document.getElementById("text");
window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    text.style.marginRight = (value * 5) + "px";
})