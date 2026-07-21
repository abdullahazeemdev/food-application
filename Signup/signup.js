const signupForm = document.getElementById("signupForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");


// ========================= SIGNUP =========================

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();

    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    // ============== Empty Validation ==============

    if (!name || !email || !passwordValue || !confirmPasswordValue) {

        Swal.fire({
            icon: "warning",
            title: "Missing Fields",
            text: "Please fill all fields."
        });

        return;
    }


    // ============== Email Validation ==============

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address."
        });

        return;
    }


    // ============== Password Length ==============

    if (passwordValue.length < 8) {

        Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Password must be at least 8 characters."
        });

        return;
    }


    // ============== Confirm Password ==============

    if (passwordValue !== confirmPasswordValue) {

        Swal.fire({
            icon: "error",
            title: "Password Mismatch",
            text: "Passwords do not match."
        });

        return;
    }


    // ============== Get Existing Users ==============

    let users = JSON.parse(localStorage.getItem("users")) || [];


    // ============== Duplicate Email Check ==============

    const userExists = users.find(user => user.email === email);

    if (userExists) {

        Swal.fire({
            icon: "error",
            title: "Account Exists",
            text: "Email already registered."
        });

        return;
    }


    // ============== New User Object ==============

    const newUser = {

        id: Date.now(),

        name,

        email,

        password: passwordValue

    };


    // ============== Save User ==============

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));


    // ============== Success Message ==============

    Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "Signup Successful!",
        timer: 2000,
        showConfirmButton: false
    }).then(() => {

        window.location.href = "../login/index.html";

    });


    signupForm.reset();

});


// ========================= PASSWORD TOGGLE =========================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});


// ================ CONFIRM PASSWORD TOGGLE =================

toggleConfirm.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        toggleConfirm.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        confirmPassword.type = "password";

        toggleConfirm.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});