export const selectTotalPrice = (state) =>
  Object.values(state.cart.data).reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
export const selectTotalProducts = (state) =>
  Object.values(state.cart.data).reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
