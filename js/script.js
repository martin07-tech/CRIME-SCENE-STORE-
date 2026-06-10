// ======================================
// HEADER SCROLL EFFECT
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


// ======================================
// SMOOTH SCROLL
// ======================================

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
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ======================================
// INTERSECTION OBSERVER ANIMATIONS
// ======================================

const animatedElements =
document.querySelectorAll(
`
.about,
.news-card,
.gallery-section,
.cta-section,
.product-card,
.overlay
`
);

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ======================================
// SEARCH BAR GLOW EFFECT
// ======================================

const searchInput =
document.querySelector(".navbar input");

if(searchInput){

    searchInput.addEventListener("focus", () => {

        searchInput.classList.add("focused");

    });

    searchInput.addEventListener("blur", () => {

        searchInput.classList.remove("focused");

    });

}


// ======================================
// ACTIVE FILTER BUTTONS
// ======================================

const filterButtons =
document.querySelectorAll(".shop-nav button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


// ======================================
// IMAGE HOVER PARALLAX
// ======================================

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) / 25);

        const rotateY =
        ((centerX - x) / 25);

        card.style.transform =
        `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "rotateX(0) rotateY(0) translateY(0)";

    });

});


// ======================================
// CART TOGGLE
// ======================================

function toggleCart(){

    const cart =
    document.getElementById("cart");

    cart.classList.toggle("active");

}


// ======================================
// LOADING ANIMATION
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});