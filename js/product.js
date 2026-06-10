// ======================================
// PRODUCTS
// ======================================

const products = [
    {
        id: 1,
        name: "Case NO:1 Tee",
        price: 220,
        category: "tshirt",
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/products/IMG-20260512-WA0014.jpg"
    },

    {
        id: 2,
        name: "CS Hoodie",
        price: 350,
        category: "hoodie",
        sizes: ["S", "M", "L", "XL"],
        image: "assets/images/products/IMG-20260512-WA0007.jpg"
    },

    {
        id: 3,
        name: "Crime Cap",
        price: 120,
        category: "cap",
        sizes: ["One Size"],
        image: "assets/images/products/1778690174947.png"
    }
];


// ======================================
// HTML ELEMENTS
// ======================================

const productsContainer =
document.getElementById("products-container");

const cartItemsContainer =
document.getElementById("cart-items");

const cartCounter =
document.getElementById("cart-count");

const cartPanel =
document.getElementById("cart");

const filterButtons =
document.querySelectorAll(".shop-nav button");


// ======================================
// CART ARRAY
// ======================================

let cartItems = [];


// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts(items){

    productsContainer.innerHTML = "";

    items.forEach(product => {

        productsContainer.innerHTML += `

        <div class="product-card fade-up">

            <img src="${product.image}"
                 alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>R${product.price}</p>

                <div class="sizes">

                    ${product.sizes.map(size =>

                        `
                        <button class="size-btn">
                            ${size}
                        </button>
                        `

                    ).join("")}

                </div>

                <button
                    onclick="addToCart(${product.id}, this)"
                    class="add-btn"
                >

                    ADD TO CART

                </button>

            </div>

        </div>

        `;

    });

}

displayProducts(products);


// ======================================
// SIZE SELECTION
// ======================================

document.addEventListener("click", function(e){

    if(e.target.classList.contains("size-btn")){

        const buttons =
        e.target.parentElement.querySelectorAll(".size-btn");

        buttons.forEach(btn => {

            btn.classList.remove("active");

        });

        e.target.classList.add("active");

    }

});


// ======================================
// FILTER PRODUCTS
// ======================================

function filterProducts(category){

    filterButtons.forEach(btn => {

        btn.classList.remove("active");

    });

    event.target.classList.add("active");

    if(category === "all"){

        displayProducts(products);

        return;

    }

    const filteredProducts =
    products.filter(product =>
        product.category === category
    );

    displayProducts(filteredProducts);

}


// ======================================
// UPCOMING SLIDER
// ======================================

const upcomingSection =
document.getElementById("upcoming");

const backgrounds = [

    "assets/images/products/IMG-20260512-WA0043.jpg",

    "assets/images/products/IMG-20260512-WA0042.jpg",

    "assets/images/products/IMG-20260512-WA0023.jpg",

    "assets/images/products/IMG-20260512-WA0010.jpg",

    "assets/images/products/IMG-20260512-WA0008.jpg"

];

let currentBackground = 0;

setInterval(() => {

    currentBackground++;

    if(currentBackground >= backgrounds.length){

        currentBackground = 0;

    }

    upcomingSection.style.backgroundImage =
    `
    linear-gradient(
        rgba(0,0,0,0.65),
        rgba(0,0,0,0.8)
    ),
    url('${backgrounds[currentBackground]}')
    `;

}, 3500);


// ======================================
// ADD TO CART
// ======================================

function addToCart(id, button){

    const product =
    products.find(item => item.id === id);

    const productCard =
    button.closest(".product-card");

    const activeSize =
    productCard.querySelector(".size-btn.active");

    if(!activeSize){

        alert("Please select a size.");

        return;

    }

    const selectedSize =
    activeSize.textContent;

    cartItems.push({

        ...product,

        size: selectedSize

    });

    updateCart();

    cartPanel.classList.add("active");

}


// ======================================
// UPDATE CART
// ======================================

function updateCart(){

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cartItems.forEach((item, index) => {

        total += item.price;

        cartItemsContainer.innerHTML += `

        <div class="cart-item">

            <div>

                <h4>${item.name}</h4>

                <p>
                    Size: ${item.size}
                </p>

                <p>
                    R${item.price}
                </p>

            </div>

            <button
                onclick="removeFromCart(${index})"
                class="remove-btn"
            >

                ✕

            </button>

        </div>

        `;

    });

    cartItemsContainer.innerHTML += `

    <div class="cart-total">

        TOTAL: R${total}

    </div>

    `;

    cartCounter.innerText =
    cartItems.length;

}


// ======================================
// REMOVE FROM CART
// ======================================

function removeFromCart(index){

    cartItems.splice(index, 1);

    updateCart();

}


// ======================================
// TOGGLE CART
// ======================================

function toggleCart(){

    cartPanel.classList.toggle("active");

}


// ======================================
// WHATSAPP CHECKOUT
// ======================================

function checkoutWhatsApp(){

    if(cartItems.length === 0){

        alert("Your cart is empty.");

        return;

    }

    let message =
    "Hello Crime Scene,%0A%0A";

    message +=
    "I want to order:%0A%0A";

    let total = 0;

    cartItems.forEach(item => {

        total += item.price;

        message +=
        `• ${item.name} | Size: ${item.size} | R${item.price}%0A`;

    });

    message +=
    `%0ATotal: R${total}%0A`;

    message +=
    "%0APlease confirm availability.";

    window.open(

        `https://wa.me/27692574788?text=${message}`,

        "_blank"

    );

}


// ======================================
// CLOSE CART WHEN CLICKING OUTSIDE
// ======================================

window.addEventListener("click", (e) => {

    if(
        !cartPanel.contains(e.target) &&
        !e.target.closest(".cart-icon")
    ){

        cartPanel.classList.remove("active");

    }

});


// ======================================
// HEADER SCROLL EFFECT
// ======================================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


// ======================================
// INTERSECTION OBSERVER
// ======================================

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

document.querySelectorAll(
".product-card, .overlay, .gallery-section"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});