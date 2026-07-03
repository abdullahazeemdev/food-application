// console.log(menuData)


// target

const menuCard = document.getElementById("all");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const drink = document.getElementById("drinks");
const dessert = document.getElementById("dessert");
const salad = document.getElementById("salad");
// console.log(allmenu,breakfast,lunch,dessert,drink,dinner,salad)


menuCard.addEventListener("click", () => allmenu());
breakfast.addEventListener("click", () => allBreakfast());
lunch.addEventListener("click", () => allLunch());
dessert.addEventListener("click", () => allDessert());
dinner.addEventListener("click", () => allDinner());
drink.addEventListener("click", () => allDrinks());
salad.addEventListener("click", () => allSalad());

allmenu();

// const modifedMenu = menuData.map(function (menu){
//     const menuHtml = `
// <div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
//     <div class="relative overflow-hidden">
//         <img
//             src="${menu.image}"
//             alt="${menu.name}"
//             class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
//         >

        
//         <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
//             ${menu.category}
//         </span>
//     </div>

    
//     <div class="p-5">

//         <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
//             ${menu.name}
//         </h3>

//         <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
//             ${menu.description}
//         </p>

//         <div class="flex justify-between items-center mt-5">

//             <span class="text-2xl font-bold text-yellow-400">
//                 ${menu.price}
//             </span>

//             <button
//                 class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
//                 Add +
//             </button>

//         </div>

//     </div>

// </div>`

// return menuHtml
// })

// const menuContainer = document.getElementById("menu-container")
// menuContainer.innerHTML = modifedMenu.join(' ');



function allmenu(){
    const modifedMenu = menuData.map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}

function allBreakfast(){
   const modifedMenu = menuData.filter(function(menu){
    return menu.category == "breakfast"
   }).map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}

function allLunch(){
    const modifedMenu = menuData.filter(function(menu){
    return menu.category == "Lunch"
   }).map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}

function allDinner(){
    const modifedMenu = menuData.filter(function(menu){
    return menu.category == "Dinner"
   }).map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}
function allDrinks(){
    const modifedMenu = menuData.filter(function(menu){
    return menu.category == "Drinks"
   }).map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}

function allDessert(){
    const modifedMenu = menuData.filter(function(menu){
    return menu.category == "Dessert"
   }).map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}

function allSalad(){
    const modifedMenu = menuData.filter(function(menu){
    return menu.category == "Salad"
   }).map(function (menu){
    const menuHtml = `
<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
    <div class="relative overflow-hidden">
        <img
            src="${menu.image}"
            alt="${menu.name}"
            class="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
        >

        
        <span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            ${menu.category}
        </span>
    </div>

    
    <div class="p-5">

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            ${menu.name}
        </h3>

        <p class="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
            ${menu.description}
        </p>

        <div class="flex justify-between items-center mt-5">

            <span class="text-2xl font-bold text-yellow-400">
                ${menu.price}
            </span>

            <button
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95">
                Add +
            </button>

        </div>

    </div>

</div>`

return menuHtml
})

const menuContainer = document.getElementById("menu-container")
menuContainer.innerHTML = modifedMenu.join(' ');
}