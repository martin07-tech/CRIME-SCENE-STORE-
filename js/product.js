// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// =========================
// PRODUCTS
// =========================

const products = [
{ id: 34,  name: "Interrogation dept. Cap",                price: 220, category: "cap", sizes: ["One Size"],    image: "assets/images/products/IMG-20260612-WA0010.jpg" },

  { id: 33,  name: "Case NO:1 Tee",                price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0014.jpg" },
  { id: 32,  name: "CS Hoodie",                     price: 350, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0007.jpg" },
  { id: 31,  name: "Crime Cap",                     price: 120, category: "cap",    sizes: ["One Size"],          image: "assets/images/products/1778690174947.png" },
  { id: 30,  name: "Crime Drip Tee",                price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0011.jpg" },
  { id: 29,  name: "T-Crime Shirt (Brown)",          price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0012.jpg" },
  { id: 28,  name: "Big Boys Tee",                  price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0013.jpg" },
  { id: 27,  name: "Classic Crime Tee",             price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0014.jpg" },
  { id: 26, name: "Any Means Hoodie (Pink)",        price: 385, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0040.jpg" },
  { id: 25, name: "Discovery Shirt (Grey)",         price: 300, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0039.jpg" },
  { id: 24, name: "Discovery Shirt (Black)",        price: 300, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0038.jpg" },
  { id: 23, name: "Any Means Hoodie (White)",       price: 385, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0035.jpg" },
  { id: 22, name: "Any Means Hoodie (Blue)",        price: 385, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0034.jpg" },
  { id: 21, name: "Any Means Hoodie (Brown)",       price: 385, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0033.jpg" },
  { id: 20, name: "Crime Drip Shirt",               price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0032.jpg" },
  { id: 19, name: "Discovery Shirt (Purple)",       price: 300, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0036.jpg" },
  { id: 18, name: "Evidence Drip Tee",              price: 230, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0031.jpg" },
  { id: 17, name: "CS P Hoodie (Green)",            price: 375, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0030.jpg" },
  { id: 16, name: "CRC Shirt",                      price: 230, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0029.jpg" },
  { id: 15, name: "CS P Hoodie (Purple)",           price: 360, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0028.jpg" },
  { id: 14, name: "Evidence Drip Shirt",            price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0027.jpg" },
  { id: 13, name: "Case Close Tee",                 price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0025.jpg" },
  { id: 12, name: "Big Boy Tee (Pitch)",            price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0024.jpg" },
  { id: 11, name: "Street Crime Shirt (Black)",     price: 230, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0022.jpg" },
  { id: 10, name: "Street Crime Shirt (Purple)",    price: 230, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0021.jpg" },
  { id: 9, name: "Case Secured Tee",              price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0020.jpg" },
  { id: 8, name: "Crime Drip Shirt (White)",       price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0019.jpg" },
  { id: 7, name: "Crime Drip Shirt (Purple)",      price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0018.jpg" },
  { id: 6, name: "Case Closed Tee (Pink)",         price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0017.jpg" },
  { id: 5, name: "Case Close Tee (Black)",         price: 250, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0016.jpg" },
  { id: 4, name: "Case 001 Shirt (White)",         price: 220, category: "tshirt", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0015.jpg" },
  { id: 3, name: "Police Line Hoodie (White)",     price: 350, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260203-WA0005.jpg" },
  { id: 2, name: "CS P Hoodie (Black)",            price: 375, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0009.jpg" },
  { id: 1, name: "CS Hoodie",                      price: 360, category: "hoodie", sizes: ["S","M","L","XL"],    image: "assets/images/products/IMG-20260512-WA0044.jpg" }
];

// =========================
// DOM ELEMENTS
// =========================

const productsContainer  = document.getElementById("products-container");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalEl        = document.getElementById("cart-total");
const cartCounter        = document.getElementById("cart-count");
const cartPanel          = document.getElementById("cart");
const filterButtons      = document.querySelectorAll(".filter-btn");
const upcomingSection    = document.getElementById("upcoming");
const header             = document.querySelector(".header");

// =========================
// STATE
// =========================

let cartItems = [];
let currentBg = 0;

const backgrounds = [
  "assets/images/products/IMG-20260512-WA0043.jpg",
  "assets/images/products/IMG-20260512-WA0042.jpg",
  "assets/images/products/IMG-20260512-WA0023.jpg",
  "assets/images/products/IMG-20260512-WA0010.jpg",
  "assets/images/products/IMG-20260512-WA0008.jpg",
  "assets/images/products/IMG-20260612-WA0011.jpg",
   "assets/images/products/IMG-20260612-WA0008.jpg",
   "assets/images/products/IMG-20260612-WA0004.jpg",
   "assets/images/products/IMG-20260612-WA0006.jpg",

];

// =========================
// SCROLL REVEAL OBSERVER
// =========================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// =========================
// DISPLAY PRODUCTS
// =========================

function displayProducts(items) {
  productsContainer.innerHTML = "";

  if (items.length === 0) {
    productsContainer.innerHTML = `
      <p style="
        color: var(--text-soft);
        letter-spacing: 2px;
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 0;
        text-transform: uppercase;
      ">No products in this category yet.</p>
    `;
    return;
  }

  items.forEach((product, i) => {
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

    // staggered reveal
    setTimeout(() => observer.observe(card), i * 60);
  });
}

displayProducts(products);

// =========================
// SIZE SELECTION
// =========================

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("size-btn")) return;

  const siblings = e.target.closest(".sizes").querySelectorAll(".size-btn");
  siblings.forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
});

// =========================
// FILTER PRODUCTS
// =========================

function filterProducts(category) {
  // update active filter button
  filterButtons.forEach(btn => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");

  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  displayProducts(filtered);
}

// =========================
// BACKGROUND SLIDER
// =========================

setInterval(() => {
  currentBg = (currentBg + 1) % backgrounds.length;
  upcomingSection.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.82)),
    url('${backgrounds[currentBg]}')
  `;
}, 3500);

// =========================
// ADD TO CART
// =========================

function addToCart(id, button) {
  const product    = products.find(p => p.id === id);
  const card       = button.closest(".product-card");
  const activeSize = card.querySelector(".size-btn.active");

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

// =========================
// UPDATE CART
// =========================

function updateCart() {
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;

    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>Size: ${item.size}</p>
          <p>R${item.price}</p>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
      </div>
    `;
  });

  // total
  cartTotalEl.textContent = cartItems.length ? `TOTAL: R${total}` : "";

  // counter badge
  cartCounter.textContent = cartItems.length;
}

// =========================
// REMOVE FROM CART
// =========================

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// =========================
// TOGGLE CART
// =========================

function toggleCart() {
  cartPanel.classList.toggle("active");
}

// =========================
// WHATSAPP CHECKOUT
// =========================

function checkoutWhatsApp() {
  if (!cartItems.length) {
    alert("Your cart is empty.");
    return;
  }

  let message = "Hello Crime Scene,%0A%0AI want to order:%0A%0A";
  let total   = 0;

  cartItems.forEach(item => {
    total   += item.price;
    message += `• ${item.name} | Size: ${item.size} | R${item.price}%0A`;
  });

  message += `%0ATotal: R${total}%0A%0APlease confirm availability.`;

  window.open(`https://wa.me/27692574788?text=${message}`, "_blank");
}

// =========================
// CLOSE CART ON OUTSIDE CLICK
// =========================

window.addEventListener("click", (e) => {
  if (
    !cartPanel.contains(e.target) &&
    !e.target.closest(".cart-trigger")
  ) {
    cartPanel.classList.remove("active");
  }
});

// =========================
// HEADER SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});
