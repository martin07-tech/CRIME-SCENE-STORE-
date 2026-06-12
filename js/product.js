// ======================================
// PAGE LOAD
// ======================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// =========================
// PRODUCTS
// =========================

const products = [

{
    id: 1,
    name: "Case NO:1 Tee",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0014.jpg"
},

{
    id: 2,
    name: "CS Hoodie",
    price: "R350",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0007.jpg"
},

{
    id: 3,
    name: "Crime Cap",
    price: "R120",
    category: "cap",
    sizes: ["One Size"],
    image: "assets/images/products/1778690174947.png"
},

{
    id: 6,
    name: "Crime Drip tee",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0011.jpg"
},

{
    id: 7,
    name: "T-crime shirt (Brown)",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0012.jpg"
},

{
    id: 8,
    name: "BIG BOYS tee",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0013.jpg"
},

{
    id: 9,
    name: "Classic Crime tee",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0014.jpg"
},

{
    id: 10,
    name: "Any Means Hoodie (pink)",
    price: "R385",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0040.jpg"
},

{
    id: 11,
    name: "Discovery shirt (grey)",
    price: "R300",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0039.jpg"
},

{
    id: 12,
    name: "Discovery shirt (black)",
    price: "R300",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0038.jpg"
},

{
    id: 13,
    name: "Any Means Hoodie (white)",
    price: "R385",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0035.jpg"
},

{
    id: 14,
    name: "Any Means Hoodie (blue)",
    price: "R385",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0034.jpg"
},

{
    id: 15,
    name: "Any Means Hoodie (brown)",
    price: "R385",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0033.jpg"
},

{
    id: 16,
    name: "Crime Drip shirt",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0032.jpg"
},

{
    id: 17,
    name: "Discovery shirt (purpule)",
    price: "R300",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0036.jpg"
},

{
    id: 18,
    name: "Evidence Drip tee",
    price: "R230",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0031.jpg"
},

{
    id: 19,
    name: "CRIME SCENE P Hoodie (green)",
    price: "R375",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0030.jpg"
},

{
    id: 20,
    name: "CRC shirt",
    price: "R230",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0029.jpg"
},

{
    id: 21,
    name: "CRIME SCENE P Hoodie (purpule)",
    price: "R360",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0028.jpg"
},

{
    id: 22,
    name: "Evidence Drip shrt",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0027.jpg"
},

{
    id: 23,
    name: "case Close tee",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0025.jpg"
},

{
    id: 24,
    name: "BIG BOY tee (pitch)",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0024.jpg"
},

{
    id: 25,
    name: "Street Crime shirt (black)",
    price: "R230",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0022.jpg"
},

{
    id: 26,
    name: "Street Crime shirt (purpule)",
    price: "R230",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0021.jpg"
},

{
    id: 27,
    name: "Case Secured tee",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0020.jpg"
},

{
    id: 28,
    name: "Crim Drip shirt (white)",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0019.jpg"
},

{
    id: 29,
    name: "Crime Drip shirt (purpule)",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0018.jpg"
},

{
    id: 30,
    name: "Case Closed tee (pink)",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0017.jpg"
},

{
    id: 31,
    name: "Case Close tee (black)",
    price: "R250",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0016.jpg"
},

{
    id: 32,
    name: "Case 001 shirt (white)",
    price: "R220",
    category: "tshirt",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0015.jpg"
},

{
    id: 33,
    name: "polioce line Hoodie (white)",
    price: "R350",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260203-WA0005.jpg"
},

{
    id: 34,
    name: "CRIME SCENE P Hoodie (black)",
    price: "R375",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0009.jpg"
},

{
    id: 35,
    name: "CS Hoodie",
    price: "R360",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    image: "assets/images/products/IMG-20260512-WA0044.jpg"
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

            <div class="sizes">

            ${product.sizes.map(size =>

                `<button class="size-btn">${size}</button>`

                 ).join("")}

            </div>

            <button onclick="addToCart(${product.id}, this)">

             ADD TO CART

            </button>

            </div>

        </div>

        `;

    });

}

displayProducts(products);

document.addEventListener("click", function(e){

    if(e.target.classList.contains("size-btn")){

        const buttons =
        e.target.parentElement.querySelectorAll(".size-btn");

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        e.target.classList.add("active");

    }

});


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

const upcomingSection = document.getElementById("upcoming");

const backgrounds = [
    "assets/images/products/IMG-20260512-WA0043.jpg",
    "assets/images/products/IMG-20260512-WA0042.jpg",
    "assets/images/products/IMG-20260512-WA0023.jpg",
    "assets/images/products/IMG-20260512-WA0010.jpg",
    "assets/images/products/IMG-20260512-WA0008.jpg",
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= backgrounds.length){
        current = 0;
    }

    upcomingSection.style.backgroundImage =
    `url('${backgrounds[current]}')`;

}, 3000);


// =========================
// ADD TO CART
// =========================

function addToCart(id, button){

    const product =
    products.find(item => item.id === id);

    const productCard =
    button.closest(".product-card");

    const activeSize =
    productCard.querySelector(".size-btn.active");

    if(!activeSize){
        alert("Please select a size");
        return;
    }

    const selectedSize =
    activeSize.textContent;

    cartItems.push({
        ...product,
        size: selectedSize
    });

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

            <<h4>${item.name}</h4>
             <p>Size: ${item.size}</p>
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

    `https://wa.me/27692574788?text=${message}`,

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
