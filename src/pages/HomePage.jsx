import React from "react";
import { Categories, PizzaElement, SortPopup } from "../components";

export default function HomePage({ items }) {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((pizzaInfo) => (
            <PizzaElement key={pizzaInfo.id} additionalInfo={pizzaInfo} />
          ))}
      </div>
    </div>
  );
}
