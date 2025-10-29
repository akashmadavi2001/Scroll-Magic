let section = document.querySelector('section');

window.addEventListener('scroll', function () {
    let values = window.scrollY;

    section.style.clipPath = "circle(" + values * 2.2 + "px at top left";
})