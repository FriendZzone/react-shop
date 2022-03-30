export const cartItems = (state) =>
  state.cart.cart;
export const cartTotalItems = (state) =>
  state.cart.cart.reduce(
    (total, current) => total + current.quantity,
    0
  );
export const totalCartPrice = (state) =>
  state.cart.cart.reduce(
    (total, current) =>
      total + current.quantity * current.price,
    0
  );
