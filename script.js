// CART SYSTEM
let cart = [];

function showSection(sectionId){

document.querySelectorAll(".page-section").forEach(section=>{
section.style.display="none";
});

document.getElementById(sectionId).style.display="block";

}

// ADD TO CART WITH SIZE
function addToCart(button, name, price){
    const product = button.closest('.product');
    const sizeSelect = product.querySelector('.size-select');
    const size = sizeSelect.value;

    if(size === ""){
        alert("Select size first");
        return;
    }

    cart.push({name, price, size});
    updateCart();
}

function updateCart(){
    const items = document.getElementById('cartItems');
    items.innerHTML = '';
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;
        items.innerHTML += `
        <div class="cart-item">
            ${item.name} (${item.size}) - R${item.price}
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

function sendOrder(){
    if(cart.length === 0) return alert("No evidence selected");

    let msg = 'Hello CRIME SCENE,%0A%0AEvidence Bag:%0A';

    cart.forEach(i => {
        msg += `• ${i.name} (${i.size}) - R${i.price}%0A`;
    });

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

// FILTER PRODUCTS
function filterProducts(category, btn){
    const products = document.querySelectorAll('.product');
    const buttons = document.querySelectorAll('.product-nav button');

    // remove active class from all buttons
    buttons.forEach(b => b.classList.remove('active'));

    // add active to clicked button
    if(btn){
        btn.classList.add('active');
    }

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');

        if(category === 'all' || productCategory === category){
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
function swapImage(el){

const main = document.getElementById("mainDrop");

main.src = el.src;

}