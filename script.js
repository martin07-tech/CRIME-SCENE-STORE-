// ===============================
// CRIME SCENE STORE JS
// ===============================

// CART STORAGE
let cart = [];

// ===============================
// PAGE NAVIGATION
// ===============================
function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach(section => {
    section.style.display = "none";
  });

  const target = document.getElementById(sectionId);
  if (target) target.style.display = "block";
}

// ===============================
// CART SYSTEM
// ===============================
function addToCart(button, name, price){

  const product = button.closest('.product');

  if(!product){
    console.log("Product not found");
    return;
  }

  const sizeSelect = product.querySelector('.size-select');
  let size = "One Size";

  if(sizeSelect){
    size = sizeSelect.value;

    if(size === ""){
      alert("Select size first");
      return;
    }
  }

  cart.push({name, price, size});
  updateCart();
}

function updateCart(){

  const itemsContainer = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  if(!itemsContainer) return;

  itemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    itemsContainer.innerHTML += `
      <div class="cart-item">
        ${item.name} (${item.size}) - R${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;

  });

  if(cartCount) cartCount.innerText = cart.length;
  if(cartTotal) cartTotal.innerText = total;

}

function removeItem(index){
  cart.splice(index,1);
  updateCart();
}

// ===============================
// CART MODAL
// ===============================
function toggleCart(){

  const modal = document.getElementById("cartModal");
  if(!modal) return;

  modal.style.display =
    modal.style.display === "flex" ? "none" : "flex";
}

// ===============================
// WHATSAPP ORDER
// ===============================
function sendOrder(){

  if(cart.length === 0){
    alert("No evidence selected");
    return;
  }

  let message = "Hello CRIME SCENE,%0A%0AEvidence Bag:%0A";

  cart.forEach(item=>{
    message += `• ${item.name} (${item.size}) - R${item.price}%0A`;
  });

  const phone = "27692574788";

  window.open(`https://wa.me/${phone}?text=${message}`);
}

// ===============================
// IMAGE VIEWER
// ===============================
function openImage(src){

  const modal = document.getElementById("imageModal");
  const img = document.getElementById("fullImage");

  if(!modal || !img) return;

  img.src = src;
  modal.style.display = "flex";
}

function closeImage(){
  const modal = document.getElementById("imageModal");
  if(modal) modal.style.display = "none";
}

// ===============================
// PRODUCT SEARCH
// ===============================
function searchProducts(){

  const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase