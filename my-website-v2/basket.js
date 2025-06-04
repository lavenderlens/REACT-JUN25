export var basket = [];
// export var numProducts = 0;

export function addProductToBasket(product, quantity = 1) {
  for (let item of basket) {
    if (item.product.id == product.id) {
      item.quantity += quantity;
      return;
    }
  }
  basket.push({ product, quantity });
}
export function getNumProducts() {
  var numProducts = 0;
  for (var item of basket) {
    numProducts += item.quantity;
  }
  return numProducts;
}

export function clearBasket() {
  basket = [];
}
export function getBasketTotal() {
  var total = 0;
  for (var item of basket) {
    total += item.product.price * item.quantity;
  }
  return total;
}
