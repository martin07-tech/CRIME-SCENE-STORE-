// =========================
// HEADER SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,0.9)";

        header.style.backdropFilter =
        "blur(15px)";

        header.style.borderBottom =
        "1px solid rgba(216,184,4,0.2)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,0.6)";

        header.style.backdropFilter =
        "blur(10px)";

        header.style.borderBottom =
        "1px solid rgba(255,255,255,0.05)";
    }

});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// FADE-IN ANIMATION
// =========================

const fadeElements =
document.querySelectorAll(
".about, .news-card, .gallery-section, .cta-section"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 1s ease";

    observer.observe(element);

});


// =========================
// SEARCH BAR EFFECT
// =========================

const searchInput =
document.querySelector(".navbar input");

if(searchInput){

    searchInput.addEventListener("focus", () => {

        searchInput.style.boxShadow =
        "0 0 20px rgba(216,184,4,0.4)";

    });

    searchInput.addEventListener("blur", () => {

        searchInput.style.boxShadow =
        "none";

    });

}