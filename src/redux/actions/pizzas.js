import axios from "axios";
export const setLoaded = (payload) => {
  return {
    type: "SET_LOADED",
    payload,
  };
};
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://my-json-server.typicode.com/KirillZhdanov/pizza-fake-server/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
