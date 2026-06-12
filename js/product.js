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

  {
    id: 37,
    name: "Interrogation Dept Tee (White)",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260612-WA0007.jpg"
  },

  {
    id: 36,
    name: "Interrogation Dept Tee (Black)",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260612-WA0009.jpg"
  },

  {
    id: 35,
    name: "Interrogation Dept Cap (White)",
    price: 120,
    category: "cap",
    sizes: ["One Size"],
    image: "assets/images/products/IMG-20260612-WA0005.jpg"
  },

  {
    id: 34,
    name: "Interrogation Dept Cap (Black)",
    price: 120,
    category: "cap",
    sizes: ["One Size"],
    image: "assets/images/products/IMG-20260612-WA0010.jpg"
  },

  {
    id: 33,
    name: "Case No. 1 Tee",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0014.jpg"
  },

  {
    id: 32,
    name: "CS Hoodie",
    price: 350,
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0007.jpg"
  },

  {
    id: 31,
    name: "Crime Cap",
    price: 120,
    category: "cap",
    sizes: ["One Size"],
    image: "assets/images/products/1778690174947.png"
  },

  {
    id: 30,
    name: "Crime Drip Tee",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0011.jpg"
  },

  {
    id: 29,
    name: "T-Crime Shirt (Brown)",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0012.jpg"
  },

  {
    id: 28,
    name: "Big Boys Tee",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0013.jpg"
  },

  {
    id: 27,
    name: "Classic Crime Tee",
    price: 220,
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0014.jpg"
  }

  // Continue the rest in the same format...
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
