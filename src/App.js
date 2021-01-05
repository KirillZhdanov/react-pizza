import "./scss/app.scss";
import { Header } from "./components";
import { HomePage, Cart } from "./pages";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

/*const tmpPizzaArray = [
  "Пицца из половинок",
  "Додо 2077",
  "Нежный лосось",
  "Карбонара",
  "Ветчина и грибы",
  "Четыре сезона",
  "Додо",
  "Песто",
  "Пепперони",
  "Чизбургер-пицца",
  "Четыре сыра 🌱",
  "Ветчина и сыр",
  "Цыпленок барбекю",
  "Цыпленок ранч",
  "Двойная пепперони",
  "Супермясная",
  "Мясная",
  "Деревенская",
  "Цезарь",
  "Аррива!",
  "Мексиканская 🌶️🌶️",
  "Сырный цыпленок",
  "Итальянская",
  "Пепперони фреш",
  "Гавайская",
  "Сырная 🌱",
  "Кисло-сладкий цыпленок",
  "Пицца-пирог 🌱",
  "Овощи и грибы 🌱",
  "Маргарита 🌱",
];*/
function App() {
  const [pizzasArray, setPizzas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route exact path="/" render={() => <HomePage items={pizzasArray} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
