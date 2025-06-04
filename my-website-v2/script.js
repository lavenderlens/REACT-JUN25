import {
  basket,
  getNumProducts,
  addProductToBasket,
  clearBasket,
  getBasketTotal,
} from "./basket.js";

onload = function () {
  var products = [
    {
      id: 1,
      image: "assortment-in-heart-shaped-box.jpg",
      description: "Chocolate cream assortment",
      price: 19.99,
    },
    {
      id: 2,
      image: "chocolate-brownie.jpg",
      description: "Chocolate brownie",
      price: 3.99,
    },
    {
      id: 3,
      image: "chocolate-candies.jpg",
      description: "Chocolate candy assortment",
      price: 9.99,
    },
    {
      id: 4,
      image: "dark-chocolate-pieces.jpg",
      description: "Dark chocolate pieces",
      price: 6.99,
    },
  ];
  var productsDiv = document.querySelector(".products");
  for (let product of products) {
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");

    var img = document.createElement("img");
    img.src = "./products/" + product.image;
    productDiv.appendChild(img);

    var descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = product.description;
    productDiv.appendChild(descriptionParagraph); //alt + shift + down arrow

    var priceParagraph = document.createElement("p");
    priceParagraph.innerText = "£" + product.price;
    productDiv.appendChild(priceParagraph);

    var button = document.createElement("button");
    button.innerText = "Add to basket";
    productDiv.appendChild(button);
    productsDiv.appendChild(productDiv); //end previous code

    button.onclick = function () {
      addProductToBasket(product);
      console.log(getNumProducts());
      console.log(getBasketTotal());
      console.log(basket);
    };
  }
};
