const showSpinner = () =>
  document.getElementById("loading-spinner").classList.remove("hidden");
const hideSpinner = () =>
  document.getElementById("loading-spinner").classList.add("hidden");

let activeCategory = null;
const setActiveCategory = (id) => {
  activeCategory = id;
  document.querySelectorAll("#categories-container button").forEach((btn) => {
    btn.classList.remove("bg-green-700", "text-white");
  });
  if (id)
    document
      .getElementById(`cat-${id}`)
      ?.classList.add("bg-green-700", "text-white");
  else
    document
      .getElementById("all-category")
      .classList.add("bg-green-700", "text-white");
};

const loadCategory_name = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory_name(json.categories));
};

const loadCategory = (id) => {
  showSpinner();
  let url = "https://openapi.programming-hero.com/api/plants";
  if (id) url = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      displayCategory(json.plants);
      hideSpinner();
      setActiveCategory(id);
    })
    .catch(() => hideSpinner());
};

const displayCategory = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  for (let plant of plants) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "bg-white p-3 rounded-xl shadow";

    cardDiv.innerHTML = `
      <img src="${plant.image}" alt="${
      plant.name
    }" class="rounded-md h-40 w-full object-cover" />
      <h1 onclick="openDetailModal(${
        plant.id
      })" class="font-semibold text-lg cursor-pointer hover:text-green-700">
        ${plant.name}
      </h1>
      <p class="text-sm text-gray-600">${
        plant.description?.slice(0, 80) || "No description"
      }...</p>
      <div class="flex justify-between items-center mt-2">
        <button class="btn rounded-3xl">${plant.category}</button>
        <p class="font-semibold">৳ ${plant.price || 0}</p>
      </div>
      <button onclick='addToCart(${JSON.stringify(
        plant
      )})' class="btn w-full bg-green-700 rounded-3xl text-white mt-2">
        Add to Cart
      </button>
    `;
    cardContainer.append(cardDiv);
  }
};

const displayCategory_name = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  for (let cat of categories) {
    const li = document.createElement("li");
    li.innerHTML = `
      <button id="cat-${cat.id}" onclick="loadCategory(${cat.id})" class="w-full border-none hover:bg-green-700 hover:text-white text-left p-2 rounded-md">
        ${cat.category_name}
      </button>
    `;
    categoriesContainer.append(li);
  }
};

const openDetailModal = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const plant = data.plant;
      document.getElementById("modal-image").src = plant.image;
      document.getElementById("modal-title").innerText = plant.name;
      document.getElementById("modal-description").innerText =
        plant.description;
      document.getElementById("modal-category").innerText = plant.category;
      document.getElementById("modal-price").innerText = plant.price;

      document.getElementById("detailModal").classList.add("modal-open");
    });
};

const closeModal = () => {
  document.getElementById("detailModal").classList.remove("modal-open");
};

let total = 0;
const addToCart = (plant) => {
  total += plant.price || 0;
  const cartList = document.getElementById("cart-list");

  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 rounded p-2";
  li.innerHTML = `
    <span>${plant.name}</span>
    <span>৳ ${plant.price || 0}</span>
    <button onclick="removeFromCart(${
      plant.price || 0
    }, this)" class="text-lg font-bold">x</button>
  `;
  cartList.appendChild(li);
  document.getElementById("cart-total").innerText = total;
};

const removeFromCart = (price, btn) => {
  total -= price;
  document.getElementById("cart-total").innerText = total;
  btn.parentElement.remove();
};

showSpinner();
loadCategory();
loadCategory_name();
