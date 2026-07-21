// console.log(menuData)


// target

const menuCard = document.getElementById("all");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const drink = document.getElementById("drinks");
const dessert = document.getElementById("dessert");
const salad = document.getElementById("salad");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");


function menu(category) {

    const modifedMenu = menuData.filter(function (menu) {

        if (category) { return menu.category.toLowerCase() == category.toLowerCase() }

        else {

            return true

        }

    }).map(function (menu) {

        const menuHtml = `<div class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20">

    
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

menu();



menuCard.addEventListener("click", () => menu());
breakfast.addEventListener("click", () => menu("Breakfast"));
lunch.addEventListener("click", () => menu("Lunch"));
dessert.addEventListener("click", () => menu("Dessert"));
dinner.addEventListener("click", () => menu("Dinner"));
drink.addEventListener("click", () => menu("Drinks"));
salad.addEventListener("click", () => menu("Salad"));


searchBtn.addEventListener("click", searchFood);

search.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        searchFood();
    }
});

function searchFood() {

    const searchValue = search.value.trim().toLowerCase();

    const filterItem = menuData.filter((menu) => {

        return menu.name.toLowerCase().trim().includes(searchValue)

    });

    const modified = filterItem.map((menu) => {

        return `
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

        <h3 class="text-xl font-bold text-white group-hover:text-yellow-400">
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
                class="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-white">
                Add +
            </button>

        </div>

    </div>

</div>
`;
    });

    document.getElementById("menu-container").innerHTML = modified.join(" ")

};