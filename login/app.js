
// ==================== get elements ====================



let loginForm = document.getElementById("loginForm");

let email = document.getElementById("email");

let password = document.getElementById("password");

let togglePassword = document.getElementById("togglePassword");

let remember = document.getElementById("remember");

let guestBtn = document.getElementById("guestBtn");

let login = document.getElementById("login");


// console.log(loginForm,email,password,togglePassword,remember,guestBtn)

// ========================== remember email ========================


window.addEventListener("load", () => {

    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {

        email.value = savedEmail;

        remember.checked = true
    }


});


// ====================== togglePassword ====================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';

    };

});

// ====================== login =====================


login.addEventListener("click", (e) => {

    e.preventDefault();


    const userEmail = email.value.trim().toLowerCase();

    const userPassword = password.value;

    //========================== empty validation ===========================

    if (!userEmail || !userPassword) {


        Swal.fire({
            icon: "warning",
            title: "Missing Fields",
            text: "Please fill all fields."
        });

        return;

    };


    // ====================== email validation =============================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(userEmail)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address."
        });

        return;
    };

    //  ======================== get user ===========================

    const user = JSON.parse(localStorage.getItem("users")) || [];

    // ===================       ==================================

    if(user.length === 0 ){
    Swal.fire({
        icon: "warning",
        title: "No Account Found",
        text: "No user is registered. Please sign up first."
    });
    return;
    }
    // ======================= find user ===============================

    const userFind = user.find((user) => {

       return  user.email === userEmail && user.password === userPassword;

    });

    if (!userFind) {

        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid Email or Password."
        });

        return;

    };

    // ================ saved current user ===============

    localStorage.setItem("currentUser", JSON.stringify(userFind));

    // ================== remember me ==================

    if (remember.checked) {

        localStorage.setItem("rememberEmail", userEmail);

    } else {

        localStorage.removeItem("rememberEmail");

    };

    Swal.fire({

        icon: "success",
        title: "Login Successful",
        text: `Welcome Back, ${userFind.name}!`,
        showConfirmButton: false,
        timer:2000
    }).then(() => {

        window.location.href = "../welcome/welcome.html"
    });

});








// ============ guest login =================

guestBtn.addEventListener("click", (e) => {
    
    const userGuest = {

        id : "guest",

        name: "Guest",

        email: "guest@foodfun.com",

        role: "guest"

    };


    localStorage.setItem("currentUser",JSON.stringify(userGuest));

     Swal.fire({

        icon: "success",

        title: "Guest Mode",

        text: "Welcome Guest!",

        timer:1500,

        showConfirmButton: false
    }).then(()=>{
        window.location.href = "../welcome/welcome.html"
    })

})





