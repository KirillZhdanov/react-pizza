export const addToCart = (items) => ({
  type: "ADD_TO_CART",
  payload: items,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});
export const addCartItem = (id) => ({
  type: "ADD_CART_ITEM",
  payload: id,
});
export const withdrawCartItem = (id) => ({
  type: "WITHDRAW_CART_ITEM",
  payload: id,
});
