import "./scss/app.scss";
import { Header } from "./components";
import { HomePage, Cart } from "./pages";
import { Route } from "react-router-dom";

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
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}
export default App;
