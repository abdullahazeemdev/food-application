// ========================== get element ===================

const form = document.getElementById("contactForm");

const name = document.getElementById("name");

const email = document.getElementById("email");

const massage = document.getElementById("massage");

const subject = document.getElementById("subject");

const sendBtn = document.getElementById("sendBtn")


// console.log(form,name,email,massage,sendBtn,subject)

// ====================== submit form  ==========================

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = name.value.trim()

    const emailValue = email.value.trim()

    const massageValue = massage.value.trim()

    const subjectValue = subject.value.trim()



// ================= validation =======================

if (nameValue === "" ||
    emailValue === "" ||
    massageValue === "" ||
    subjectValue === ""
    ){
    Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all fields."
    });
    return;
};
// =========== email validation ==================== 

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(emailValue)){

      Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address."
        });

        return;

};

// ====================== massage length ==============

if(massageValue.length < 10 ){

        Swal.fire({
            icon: "warning",
            title: "Message Too Short",
            text: "Message must contain at least 10 characters."
        });

        return;

};

// =============== laoding btn ===========

sendBtn.disabled = true;

sendBtn.innerHTML = "sending...";

// =============== save data ===================

const contact = {

      id : Date.now(),
      
      name : nameValue,

      email : emailValue,

      subject : subjectValue,

      massage : massageValue,

      date : new Date().toLocaleString()

};


let contacts = JSON.parse(localStorage.getItem("contact")) || [];

contacts.push(contact);

localStorage.setItem("contacts", JSON.stringify(contacts));

// ============= succees ============

setTimeout(() =>{

    Swal.fire({

            icon: "success",

            title: "Message Sent!",

            text: "Thank you for contacting FoodFun."

             });

             form.reset();

             sendBtn.disabled = false;

             sendBtn.innerHTML = "send Message"

},1200)

});