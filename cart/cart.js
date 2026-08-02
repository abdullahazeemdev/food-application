// ===================== TARGETS =====================

const cartContainer = document.getElementById("cart-items");
const emptyCart = document.getElementById("empty-cart");

const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");

const checkoutBtn = document.getElementById("checkoutBtn");
const orderBtn = document.getElementById("orderBtn");

const DELIVERY_FEE = 150;

// ===================== GET CART =====================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===================== DISPLAY CART =====================

function displayCart() {

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        emptyCart.style.display = "block";
        cartContainer.style.display = "none";

        totalItems.innerHTML = "0";
        totalPrice.innerHTML = "Rs. 0";

        return;
    }

    emptyCart.style.display = "none";
    cartContainer.style.display = "block";

    let items = 0;
    let total = 0;

    cart.forEach((item, index) => {

        const price = Number(item.price.replace(/[^\d]/g, ""));

        items += item.quantity;

        total += price * item.quantity;

        cartContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <h4 class="price">${item.price}</h4>

                <div class="quantity">

                    <button onclick="decrease(${index})">
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="increase(${index})">
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>

            </div>

            <button class="remove-btn" onclick="removeItem(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>

        `;

    });

    totalItems.innerHTML = items;

    totalPrice.innerHTML = `Rs. ${total + DELIVERY_FEE}`;

}

displayCart();

// ===================== INCREASE =====================

function increase(index) {

    cart[index].quantity++;

    updateCart();

}

// ===================== DECREASE =====================

function decrease(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}
// ===================== REMOVE ITEM =====================

function removeItem(index) {

    Swal.fire({

        title: "Remove Item?",

        text: "This item will be removed from your cart.",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#f97316",

        cancelButtonColor: "#6b7280",

        confirmButtonText: "Remove"

    }).then((result) => {

        if (result.isConfirmed) {

            cart.splice(index, 1);

            updateCart();

            Swal.fire({

                icon: "success",

                title: "Removed!",

                text: "Item removed successfully.",

                timer: 1500,

                showConfirmButton: false

            });

        }

    });

}

// ===================== UPDATE CART =====================

function updateCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// ===================== CHECKOUT BUTTON =====================

checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        Swal.fire({

            icon: "warning",

            title: "Cart Empty",

            text: "Please add some food first.",

            confirmButtonColor: "#f97316"

        });

        return;

    }

    Swal.fire({

        icon: "success",

        title: "Proceed to Checkout",

        text: "You will be redirected to the checkout page.",

        timer: 1500,

        showConfirmButton: false

    }).then(() => {

        window.location.href = "../Checkout/index.html";

    });

});

// ===================== ORDER BUTTON =====================

orderBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        Swal.fire({

            icon: "warning",

            title: "Cart Empty",

            text: "Please add some food first.",

            confirmButtonColor: "#f97316"

        });

        return;

    }

    Swal.fire({

        icon: "question",

        title: "Ready to Checkout?",

        text: "Click Continue to proceed.",

        showCancelButton: true,

        confirmButtonText: "Continue",

        cancelButtonText: "Cancel",

        confirmButtonColor: "#f97316",

        cancelButtonColor: "#6b7280"

    }).then((result) => {

        if (result.isConfirmed) {

            window.location.href = "../Checkout/index.html";

        }

    });

});