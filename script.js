// ===============================
// CRIME SCENE STORE JS
// ===============================

// CART STORAGE (temporary)
let cart = [];

// ===============================
// PAGE NAVIGATION
// ===============================
function showSection(sectionId) {

  const sections = document.querySelectorAll(".page-section");

  sections.forEach(section => {
    section.style.display = "none";
  });

  const target = document.getElementById(sectionId);

  if (target) {
    target.style.display = "block";
  }
}

// ===============================
// ADD TO CART
// ===============================
function addToCart(button, name, price) {

  const product = button.closest(".product");

  if (!product) return;

  const sizeSelect = product.querySelector(".size-select");

  if (!sizeSelect || sizeSelect.value === "") {
    alert("Select size first");
    return;
  }

  const item = {
    name: name,
    price: price,
    size: sizeSelect.value
  };

  cart.push(item);

  updateCart();
}

// ===============================
// UPDATE CART
// ===============================
function updateCart() {

  const itemsContainer = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  if (!itemsContainer) return;

  itemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      ${item.name} (${item.size}) - R${item.price}
      <button onclick="removeItem(${index})">❌</button>
    `;

    itemsContainer.appendChild(div);

  });

  if (cartCount) cartCount.innerText = cart.length;
  if (cartTotal) cartTotal.innerText = total;
}

// ===============================
// REMOVE ITEM
// ===============================
function removeItem(index) {

  cart.splice(index, 1);

  updateCart();
}

// ===============================
// CART MODAL
// ===============================
function toggleCart() {

  const modal = document.getElementById("cartModal");

  if (!modal) return;

  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

// ===============================
// WHATSAPP ORDER
// ===============================
function sendOrder() {

  if (cart.length === 0) {
    alert("No evidence selected");
    return;
  }

  let message = "Hello CRIME SCENE,%0A%0AEvidence Bag:%0A";
  let total = 0;

  cart.forEach(item => {

    total += item.price;

    message += `• ${item.name} (${item.size}) - R${item.price}%0A`;

  });

  message += `%0ATotal: R${total}`;

  const phone = "27692574788";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

// ===============================
// IMAGE VIEWER
// ===============================
function openImage(src) {

  const modal = document.getElementById("imageModal");
  const img = document.getElementById("fullImage");

  if (!modal || !img) return;

  img.src = src;

  modal.style.display = "flex";
}

function closeImage() {

  const modal = document.getElementById("imageModal");

  if (modal) modal.style.display = "none";
}

// ===============================
// PRODUCT SEARCH
// ===============================
function searchProducts() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const products = document.querySelectorAll(".product");

  products.forEach(product => {

    const name = product
      .querySelector("h3")
      .innerText
      .toLowerCase();

    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });
}

// ===============================
// PRODUCT FILTER
// ===============================
function filterProducts(category, button) {

  const products = document.querySelectorAll(".product");
  const buttons = document.querySelectorAll(".product-nav button");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (button) {
    button.classList.add("active");
  }

  products.forEach(product => {

    const productCategory = product.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });
}

// ===============================
// IMAGE SWAP
// ===============================
function swapImage(element) {

  const main = document.getElementById("mainDrop");

  if (!main) return;

  main.src = element.src;
}

// ===============================
// AMBASSADOR AUTO SLIDER
// ===============================
let scrollAmount = 0;
let slider;

function autoScroll() {

  if (!slider) return;

  scrollAmount += 1;

  if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }

  slider.scrollLeft = scrollAmount;
}

// ===============================
// INITIALIZE
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  slider = document.getElementById("ambassadorSlider");

  setInterval(autoScroll, 50);

});