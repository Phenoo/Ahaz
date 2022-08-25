const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function() {
    links.classList.toggle("show-links");
    links.style.display = "block";
});

//---------SCROLL REVEAL//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})



sr.reveal(`.container1,.container2, .container4, .links`)
sr.reveal(`.social-links, .container3, .container5, .foot, .marker, .logo`, { origin: "left" })
sr.reveal(`.divider`, { origin: "bottom" })