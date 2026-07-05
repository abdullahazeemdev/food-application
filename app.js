// console.log("js running------>")

const menu = document.getElementById("menu");
const sign = document.getElementById("sign-up")
const login = document.getElementById("login")
// const about = document.getElementById("about")
// const contact = document.getElementById("contact")
// // console.log(contact,sign,menu,login,about)

// // console.log(sign);


menu.addEventListener("click", () =>{
       window.location.href = "Menu/index.html";
})

sign.addEventListener("click", () =>{
       window.location.href = "Signup/signup.html";
})
    
login.addEventListener("click" , () => {
      window.location.href = "login/index.html";
})

// about.addEventListener("click", () => {
//       console.log(about)
//       // window.location.href = "about/index.html";
// })

// contact.addEventListener("click", () => {
//       window.location.href = "contact/index.html";
// })


// menu.forEach(btn => {

//     btn.addEventListener("click", () => {

//         window.location.href = "Menu/index.html";

//     });

// });