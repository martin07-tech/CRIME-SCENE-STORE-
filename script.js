// CART SYSTEM
let cart = [];

function showSection(id){
    document.querySelectorAll('.page-section').forEach(s => s.style.display='none');
    document.getElementById(id).style.display='block';
}

// ADD TO CART
function addToCart(name, price){
    cart.push({name, price});
    updateCart();
}

// UPDATE CART DISPLAY
function updateCart(){
    const items = document.getElementById('cartItems');
    items.innerHTML = '';
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;
        items.innerHTML += `
        <div class="cart-item">
            ${item.name} - R${item.price} 
            <button onclick="removeItem(${i})">❌</button>
        </div>`;
    });

    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('cartTotal').innerText = total;
}

// REMOVE ITEM
function removeItem(i){
    cart.splice(i, 1);
    updateCart();
}

// TOGGLE CART MODAL
function toggleCart(){
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// SEND ORDER VIA WHATSAPP
function sendOrder(){
    if(cart.length === 0) return alert("No evidence selected");
    let msg = 'Hello CRIME SCENE,%0A%0AEvidence Bag:%0A';
    cart.forEach(i => msg += `• ${i.name} - R${i.price}%0A`);
    window.open(`https://wa.me/27692574788?text=${msg}`);
}

// IMAGE MODAL
function openImage(src){
    const modal = document.getElementById('imageModal');
    document.getElementById('fullImage').src = src;
    modal.style.display = 'flex';
}

function closeImage(){
    document.getElementById('imageModal').style.display = 'none';
}

// SEARCH PRODUCTS
function searchProducts(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.product').forEach(p => {
        const name = p.querySelector('h3').innerText.toLowerCase();
        p.style.display = name.includes(input) ? 'block' : 'none';
    });
}

// OPTIONAL: AUTO SCROLL AMBASSADOR SLIDER
const slider = document.getElementById('ambassadorSlider');
let scrollAmount = 0;
function autoScroll(){
    if(slider){
        scrollAmount += 1;
        if(scrollAmount > slider.scrollWidth - slider.clientWidth){
            scrollAmount = 0;
        }
        slider.scrollTo({left: scrollAmount, behavior:'smooth'});
    }
}
setInterval(autoScroll, 50);    // ===============================
    // SAVE CART
    // ===============================

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // ===============================
    // UPDATE CART UI
    // ===============================

    function updateCartUI() {

        if (cartCountEl) {
            cartCountEl.innerText = cart.length;
        }

        if (cartItemsEl) {
            cartItemsEl.innerHTML = "";

            cart.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${item.name} - ${item.price}
                    <button class="remove-btn" data-id="${item.id}">X</button>
                `;
                cartItemsEl.appendChild(li);
            });

            addRemoveEvents();
        }
    }

    // ===============================
    // REMOVE ITEM
    // ===============================

    function addRemoveEvents() {
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", () => {

                const id = Number(btn.getAttribute("data-id"));

                cart = cart.filter(item => item.id !== id);
                saveCart();
                updateCartUI();
            });
        });
    }

});    updateCart();
}

// TOGGLE CART MODAL
function toggleCart(){
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// SEND ORDER VIA WHATSAPP
function sendOrder(){
    if(cart.length === 0) return alert("No evidence selected");
    let msg = 'Hello CRIME SCENE,%0A%0AEvidence Bag:%0A';
    cart.forEach(i => msg += `• ${i.name} - R${i.price}%0A`);
    window.open(`https://wa.me/27692574788?text=${msg}`);
}

// IMAGE MODAL
function openImage(src){
    const modal = document.getElementById('imageModal');
    document.getElementById('fullImage').src = src;
    modal.style.display = 'flex';
}

function closeImage(){
    document.getElementById('imageModal').style.display = 'none';
}

// SEARCH PRODUCTS
function searchProducts(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.product').forEach(p => {
        const name = p.querySelector('h3').innerText.toLowerCase();
        p.style.display = name.includes(input) ? 'block' : 'none';
    });
}

// OPTIONAL: AUTO SCROLL AMBASSADOR SLIDER
const slider = document.getElementById('ambassadorSlider');
let scrollAmount = 0;
function autoScroll(){
    if(slider){
        scrollAmount += 1;
        if(scrollAmount > slider.scrollWidth - slider.clientWidth){
            scrollAmount = 0;
        }
        slider.scrollTo({left: scrollAmount, behavior:'smooth'});
    }
}
setInterval(autoScroll, 50);
