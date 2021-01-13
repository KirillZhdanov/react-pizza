import React from "react";
import {
  Categories,
  PizzaElement,
  SortPopup,
  ElementLoader,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { addToCart } from "../redux/actions/cart";
import { fetchPizzas } from "../redux/actions/pizzas";

const pizzaCategories = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortByItems = [
  { name: "популярности", type: "rating", order: "asc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "названию", type: "name", order: "asc" },
];
export default function HomePage() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
  const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
  const isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
  const { sortBy, category } = useSelector(
    ({ filtersReducer }) => filtersReducer
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  const onAddToCart = React.useCallback((pizzaItem) => {
    dispatch(addToCart(pizzaItem));
    console.log(pizzaItem);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={pizzaCategories}
          activeCategory={category}
        />
        <SortPopup
          onClickItem={onSelectSortType}
          items={sortByItems}
          activeSortType={sortBy.type}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizzaInfo) => (
              <PizzaElement
                key={pizzaInfo.id}
                additionalInfo={pizzaInfo}
                onAddToCart={onAddToCart}
                addedCounter={
                  cartItems[pizzaInfo.id] &&
                  cartItems[pizzaInfo.id].items.length
                }
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, idx) => <ElementLoader key={idx} />)}
      </div>
    </div>
  );
}
