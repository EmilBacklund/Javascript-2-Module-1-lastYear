import products from "./data/products.js";
import { getExistingFavs } from "./utils/favFunctions.js";

const productContainer = document.querySelector(".product-container");

const favourites = getExistingFavs();

products.forEach((product) => {
  let cssClass = "far";

  // check through favs array
  // does the product id exist in the favs array
  const doesObjectExist = favourites.find(function (fav) {
    console.log(fav);

    return parseInt(fav.id) === product.id;
  });

  console.log(doesObjectExist);

  // if is in the array, change the style of the 'i' element
  if (doesObjectExist) {
    cssClass = "fa";
  }

  productContainer.innerHTML += `<div class="product">
  <h4>${product.name}</h4>
  <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
  </div>`;
});

const favButtons = document.querySelectorAll(".product i");

favButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  //   console.log(event);
  this.classList.toggle("fa");
  //   event.target.classList.toggle("far"); same as 'this'
  this.classList.toggle("far");

  const id = this.dataset.id;
  const name = this.dataset.name;

  //   console.log("id: ", id);
  //   console.log("name: ", name);

  const currentFavs = getExistingFavs();
  //   console.log(currentFavs);

  const productExists = currentFavs.find((fav) => {
    return fav.id === id;
  });

  //   console.log(productExists);
  if (!productExists) {
    const product = { id: id, name: name };

    currentFavs.push(product);

    saveFavourites(currentFavs);
  } else {
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFavourites(newFavs);
  }
}

function saveFavourites(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
