// =========================
// PRODUCTS
// =========================

const products = [

{
    id: 1,

    name: "Crime Scene Tee",

    price: "R350",

    category: "tshirt",

    image:
    "assets/images/tshirt1.jpg"
},

{
    id: 2,

    name: "Street Hoodie",

    price: "R650",

    category: "hoodie",

    image:
    "assets/images/hoodie1.jpg"
},

{
    id: 3,

    name: "Crime Cap",

    price: "R250",

    category: "cap",

    image:
    "assets/images/cap1.jpg"
},

{
    id: 4,

    name: "Baggy Pants",

    price: "R700",

    category: "pants",

    image:
    "assets/images/pants1.jpg"
},

{
    id: 5,

    name: "Crime Shorts",

    price: "R400",

    category: "other",

    image:
    "assets/images/shorts1.jpg"
}

];


// =========================
// HTML ELEMENTS
// =========================

const productsContainer =
document.getElementById(
"products-container"
);

const cartItemsContainer =
document.getElementById(
"cart-items"
);

const cartCounter =
document.getElementById(
"cart-count"
);

const cart =
document.getElementById(
"cart"
);


// =========================
// CART ARRAY
// =========================

let cartItems = [];


// =========================
// DISPLAY PRODUCTS
// =========================

function displayProducts(items){

    productsContainer.innerHTML = "";

    items.forEach(product => {

        productsContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}"
                 alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.price}</p>

                <button onclick="addToCart(${product.id})">

                    ADD TO CART

                </button>

            </div>

        </div>

        `;

    });

}

displayProducts(products);


// =========================
// FILTER PRODUCTS
// =========================

function filterProducts(category){

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


// =========================
// ADD TO CART
// =========================

function addToCart(id){

    const selectedProduct =
    products.find(product =>
    product.id === id
    );

    cartItems.push(selectedProduct);

    updateCart();

}


// =========================
// UPDATE CART
// =========================

function updateCart(){

    cartItemsContainer.innerHTML = "";

    cartItems.forEach((item, index) => {

        cartItemsContainer.innerHTML += `

        <div class="cart-item">

            <h4>${item.name}</h4>

            <p>${item.price}</p>

            <button onclick="removeFromCart(${index})">

                REMOVE

            </button>

        </div>

        `;

    });

    cartCounter.innerText =
    cartItems.length;

}


// =========================
// REMOVE ITEM
// =========================

function removeFromCart(index){

    cartItems.splice(index, 1);

    updateCart();

}


// =========================
// TOGGLE CART
// =========================

function toggleCart(){

    cart.classList.toggle("active");

}


// =========================
// WHATSAPP CHECKOUT
// =========================

function checkoutWhatsApp(){

    if(cartItems.length === 0){

        alert("Your cart is empty.");

        return;
    }

    let message =
    "Hello Crime Scene,%0A%0A";

    message +=
    "I want to order:%0A%0A";

    cartItems.forEach(item => {

        message +=
        `• ${item.name} - ${item.price}%0A`;

    });

    message +=
    "%0APlease confirm availability.";

    window.open(

    `https://wa.me/276XXXXXXXXX?text=${message}`,

    "_blank"

    );

}


// =========================
// CLOSE CART WHEN CLICKING OUTSIDE
// =========================

window.addEventListener("click", (e) => {

    if(
        !cart.contains(e.target) &&
        !e.target.classList.contains("cart-icon")
    ){

        cart.classList.remove("active");

    }

});