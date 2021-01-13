const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalPrice = (objToSum) =>
  +Number(objToSum.reduce((sum, obj) => obj.price + sum, 0)).toFixed(2);
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cur = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const itemsObj = {
        ...state.items,
        [action.payload.id]: {
          items: cur,
          totalPrice: getTotalPrice(cur),
        },
      };
      const items = Object.values(itemsObj).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: itemsObj,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case "ADD_CART_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: Object.values(newItems).reduce(
          (acc, curr) => acc + curr.items.length,
          0
        ),
        totalPrice: +Number(
          Object.keys(newItems).reduce(
            (acc, curr) => acc + newItems[curr].totalPrice,
            0
          )
        ).toFixed(2),
      };
    }
    case "WITHDRAW_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: Object.values(newItems).reduce(
          (acc, curr) => acc + curr.items.length,
          0
        ),
        totalPrice: +Number(
          Object.keys(newItems).reduce(
            (acc, curr) => acc + newItems[curr].totalPrice,
            0
          )
        ).toFixed(2),
      };
    }
    case "REMOVE_CART_ITEM":
      const newItems = {
        ...state.items,
      };
      const newTotalPrice = newItems[action.payload].totalPrice;
      const newTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      const items = Object.values(newItems).map((obj) => obj.items);

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - newTotalCount,
        totalPrice: state.totalPrice - newTotalPrice,
      };
    default:
      return state;
  }
};

export default cart;
