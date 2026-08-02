// ===============================
// GET ELEMENTS
// ===============================

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const grandTotal = document.getElementById("grandTotal");
const checkoutForm = document.getElementById("checkoutForm");

// ===============================
// LOAD CART
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let subTotal = 0;
const DELIVERY_FEE = 150;

// ===============================
// EMPTY CART
// ===============================

if (cart.length === 0) {

    cartItems.innerHTML = `
        <div style="text-align:center;padding:40px;">
            <h2>Your Cart is Empty 🛒</h2>
            <p>Add some delicious food first.</p>
        </div>
    `;

} else {

    displayCart();

}

// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    cartItems.innerHTML = "";

    subTotal = 0;

    cart.forEach((item) => {

        // Price ko string se number banao
        const price = Number(item.price.replace(/[^\d]/g, ""));

        const itemTotal = price * item.quantity;

        subTotal += itemTotal;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div class="cart-left">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    style="
                    width:80px;
                    height:80px;
                    object-fit:cover;
                    border-radius:10px;
                    ">

            </div>

            <div class="cart-center">

                <h4>${item.name}</h4>

                <p>${item.description}</p>

                <small>
                    Rs. ${price} × ${item.quantity}
                </small>

            </div>

            <div class="cart-price">

                Rs. ${itemTotal}

            </div>

        </div>

        `;

    });

    calculateTotals();

}

// ===============================
// TOTALS
// ===============================

function calculateTotals() {

    const gst = Math.round(subTotal * 0.05);

    const total = subTotal + DELIVERY_FEE + gst;

    subtotal.innerHTML = `Rs. ${subTotal}`;

    tax.innerHTML = `Rs. ${gst}`;

    grandTotal.innerHTML = `Rs. ${total}`;

}

// ===============================
// FORM SUBMIT
// ===============================

checkoutForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // ===============================
    // EMPTY CART CHECK
    // ===============================

    if (cart.length === 0) {

        Swal.fire({
            icon: "warning",
            title: "Cart Empty",
            text: "Please add food before checkout."
        });

        return;
    }

    // ===============================
    // GET FORM VALUES
    // ===============================

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const area = document.getElementById("area").value.trim();

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    // ===============================
    // VALIDATION
    // ===============================

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        address === "" ||
        city === "" ||
        area === ""
    ) {

        Swal.fire({
            icon: "error",
            title: "Missing Information",
            text: "Please fill all fields."
        });

        return;
    }

    if (!/^03\d{9}$/.test(phone)) {

        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Example: 03XXXXXXXXX"
        });

        return;
    }

    if (!email.includes("@")) {

        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email."
        });

        return;
    }

    // ===============================
    // CALCULATE TOTAL
    // ===============================

    const gst = Math.round(subTotal * 0.05);
    const total = subTotal + DELIVERY_FEE + gst;

    // ===============================
    // GENERATE ORDER ID
    // ===============================

    const orderId =
        "FF-" +
        Math.floor(Math.random() * 1000000);

    // ===============================
    // SAVE ORDER
    // ===============================

    const order = {

        orderId,

        customer: {
            name,
            phone,
            email,
            address,
            city,
            area
        },

        payment,

        items: cart,

        subtotal: subTotal,

        delivery: DELIVERY_FEE,

        tax: gst,

        total,

        date: new Date().toLocaleString()

    };

    localStorage.setItem(
        "lastOrder",
        JSON.stringify(order)
    );

    // ===============================
    // SUCCESS
    // ===============================

    Swal.fire({

        icon: "success",

        title: "🎉 Order Placed Successfully!",

        html: `

        <p><b>Order ID:</b> ${orderId}</p>

        <br>

        <p>Thank you for ordering from <b>FoodFun</b>.</p>

        <p>Your delicious food will arrive in</p>

        <h3 style="color:#f97316;">
        30 - 45 Minutes
        </h3>

        `,

        confirmButtonColor: "#f97316"

    }).then(() => {

        // ===============================
        // CLEAR CART
        // ===============================

        localStorage.removeItem("cart");

        cart = [];

        // Redirect Home
        window.location.href = "../Menu/index.html";

    });

});