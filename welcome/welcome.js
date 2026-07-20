// ============== get elements =======================

const userName = document.getElementById("userName");

const logout = document.getElementById("logout");

const menu = document.getElementById("menu");

// console.log(userName,logout,menu)

// =============== get current user ======================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// =============== check login ====================

if (!currentUser) {

    Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login first!",
        confirmButtonColor: "#f59e0b"
    }).then(() => {

        window.location.href = "../login/index.html";
    });

} else {

    userName.textContent = currentUser.name

    // Swal.fire({

    //     icon: "success",
    //     title: `Welcome ${currentUser.name} 👋`,
    //     text: "Login Successfully!",
    //     timer: 1800,
    //     showConfirmButton: false
    // })
};

// ================ menu button ================

menu.addEventListener("click", () => {
    window.location.href = "../Menu/index.html";
});

// ====================== logout =====================

logout.addEventListener("click", () => {
    // console.log("run")
    Swal.fire({

        title: "Logout?",
        text: "Do you really want to logout?",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Yes, Logout",
        cancelButtonText: "Cancel"

    })
        .then((res) => {

            if (res.isConfirmed) {

                localStorage.removeItem("currentUser")

                Swal.fire({
                    icon: "success",
                    title: "Logged Out",
                    text: "Logout Successfully!",
                    timer: 1500,
                    showCancelButton: false
                });

                setTimeout(() => {
                    window.location.href = "../login/index.html";
                }, 1500);
            };
        });
});