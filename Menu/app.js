// ======================= TARGETS =======================

const menuCard = document.getElementById("all");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const drink = document.getElementById("drinks");
const dessert = document.getElementById("dessert");
const salad = document.getElementById("salad");

const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

const menuContainer = document.getElementById("menu-container");


// ======================= MENU =======================

function menu(category = "") {

    const filtered = menuData.filter(item => {

        if (!category) return true;

        return item.category.toLowerCase() === category.toLowerCase();

    });

    displayProducts(filtered);

}

menu();


// ======================= DISPLAY PRODUCTS =======================

function displayProducts(products) {

    menuContainer.innerHTML = "";

    products.forEach(menu => {

        menuContainer.innerHTML += `

<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    <div class="relative overflow-hidden">

        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110">

        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">

            ${menu.category}

        </span>

    </div>

    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">

            ${menu.name}

        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6">

            ${menu.description}

        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">

                ${menu.price}

            </span>

            <button

                onclick="addCart('${menu.name}')"

                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-white transition">

                Add +

            </button>

        </div>

    </div>

</div>

`;

    });

}


// ======================= CATEGORY =======================

menuCard.addEventListener("click", () => menu());

breakfast.addEventListener("click", () => menu("Breakfast"));

lunch.addEventListener("click", () => menu("Lunch"));

drink.addEventListener("click", () => menu("Drinks"));

dinner.addEventListener("click", () => menu("Dinner"));

dessert.addEventListener("click", () => menu("Dessert"));

salad.addEventListener("click", () => menu("Salad"));


// ======================= SEARCH =======================

searchBtn.addEventListener("click", searchFood);

search.addEventListener("keyup", e => {

    if (e.key === "Enter") {

        searchFood();

    }

});


function searchFood() {

    const value = search.value.trim().toLowerCase();

    const filtered = menuData.filter(item =>

        item.name.toLowerCase().includes(value)

    );

    displayProducts(filtered);

}

// ======================= ADD TO CART =======================

function addCart(productName) {

    const product = menuData.find(item => item.name === productName);

    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find(item => item.name === productName);

    if (exist) {

        exist.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBar();

    Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${productName} has been added successfully.`,
        timer: 1200,
        showConfirmButton: false
    });

}


// ======================= UPDATE CART BAR =======================

function updateCartBar() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartBar = document.getElementById("viewCartBar");

    const cartItemsCount = document.getElementById("cartItemsCount");

    if (!cartBar || !cartItemsCount) return;

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

        const price = Number(item.price.replace(/[^\d]/g, ""));

        totalPrice += price * item.quantity;

    });

    if (totalItems === 0) {

        cartBar.style.display = "none";

        return;

    }

    cartBar.style.display = "flex";

    cartItemsCount.innerHTML = `${totalItems} Item${totalItems > 1 ? "s" : ""}`;

}


// ======================= GO TO CART =======================

function goToCart() {

    window.location.href = "../cart/cart.html";

}


// ======================= PAGE LOAD =======================

updateCartBar();


// ======================= STORAGE UPDATE =======================

window.addEventListener("storage", updateCartBar);