export function productExists(array, product) {
  return array.find((item) => item.id == product.id);
}

export function calculateItemsTotal(array) {
  return array.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue.price * (1 - currentValue.discount) * currentValue.quantity,
    0
  );
}

export function calculateItemsCount(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
}
