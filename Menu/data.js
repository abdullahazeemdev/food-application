// ================ global data =============

let menuData = [];

// ================== fetch api ================

let fetchApi = fetch("./dummy.json");

// ========================== async await ===============

async function getMenuData() {

  try {

    const response = await fetchApi;

    const data = await response.json();

    console.log(data);

    menuData = data.map((item) => {

      return {

        name: item.name,

        image: item.image,

        description: item.description,

        price: item.price,

        category: item.category

      };

    });

    menu();

  } catch (error) {

    console.log("Error :", error.massage)

  }


};

getMenuData();