let text = document.getElementById("text");
window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    text.style.marginLeft = -(value * 5) + "px";
})
