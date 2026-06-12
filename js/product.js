// ======================================
// PAGE LOAD
// ======================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


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

const productsContainer   = document.getElementById("products");
const cartItemsContainer  = document.getElementById("cart-items");
const cartTotalEl         = document.getElementById("cart-total");
const cartCounter         = document.getElementById("cart-count");
const cartPanel           = document.getElementById("cart");
const filterButtons       = document.querySelectorAll(".filter-btn");
const header              = document.querySelector(".header");


// ======================================
// CART ARRAY
// ======================================

let cartItems = [];


// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts(items) {

    productsContainer.innerHTML = "";

    if (items.length === 0) {
        productsContainer.innerHTML = `
            <p style="color:var(--text-soft);letter-spacing:2px;grid-column:1/-1;text-align:center;padding:40px 0;">
                NO PRODUCTS IN THIS CATEGORY YET.
            </p>`;
        return;
    }

    items.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card hidden";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>R${product.price}</p>
                <div class="sizes">
                    ${product.sizes.map(size =>
                        `<button class="size-btn">${size}</button>`
                    ).join("")}
                </div>
                <button onclick="addToCart(${product.id}, this)">ADD TO CART</button>
            </div>
        `;

        productsContainer.appendChild(card);
        observer.observe(card);
    });
}

displayProducts(products);


// ======================================
// FILTER PRODUCTS
// ======================================

function filterProducts(category) {

    // update active button
    filterButtons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

    const filtered = category === "all"
        ? products
        : products.filter(p => p.category === category);

    displayProducts(filtered);
}


// ======================================
// SIZE SELECTION
// ======================================

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("size-btn")) {

        const siblings =
            e.target.closest(".sizes").querySelectorAll(".size-btn");

        siblings.forEach(btn => btn.classList.remove("active"));

        e.target.classList.add("active");
    }
});


// ======================================
// ADD TO CART
// ======================================

function addToCart(id, button) {

    const product     = products.find(item => item.id === id);
    const card        = button.closest(".product-card");
    const activeSize  = card.querySelector(".size-btn.active");

    if (!activeSize) {
        alert("Please select a size.");
        return;
    }

    cartItems.push({
        ...product,
        size: activeSize.textContent.trim()
    });

    updateCart();
    cartPanel.classList.add("active");
}


// ======================================
// UPDATE CART
// ======================================

function updateCart() {

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cartItems.forEach((item, index) => {

        total += item.price;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item__info">
                    <h4>${item.name}</h4>
                    <p>Size: ${item.size}</p>
                    <p>R${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">✕</button>
            </div>
        `;
    });

    cartTotalEl.textContent = cartItems.length
        ? `TOTAL: R${total}`
        : "";

    cartCounter.textContent = cartItems.length;
}


// ======================================
// REMOVE FROM CART
// ======================================

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}


// ======================================
// TOGGLE CART
// ======================================

function toggleCart() {
    cartPanel.classList.toggle("active");
}


// ======================================
// CLOSE CART WHEN CLICKING OUTSIDE
// ======================================

window.addEventListener("click", (e) => {

    if (
        !cartPanel.contains(e.target) &&
        !e.target.closest(".cart-trigger")
    ) {
        cartPanel.classList.remove("active");
    }
});


// ======================================
// WHATSAPP CHECKOUT
// ======================================

function checkoutWhatsApp() {

    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Hello Crime Scene,%0A%0AI want to order:%0A%0A";

    let total = 0;

    cartItems.forEach(item => {
        total += item.price;
        message += `• ${item.name} | Size: ${item.size} | R${item.price}%0A`;
    });

    message += `%0ATotal: R${total}%0A%0APlease confirm availability.`;

    window.open(`https://wa.me/27692574788?text=${message}`, "_blank");
}


// ======================================
// HEADER SCROLL EFFECT
// ======================================

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});


// ======================================
// INTERSECTION OBSERVER (scroll reveal)
// ======================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
