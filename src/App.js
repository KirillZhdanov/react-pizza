import "./scss/app.scss";
import { Header } from "./components";
import { HomePage, Cart } from "./pages";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//import store from "./redux/store";

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
  const dispatch = useDispatch();
  // const { items } = useSelector(({ pizzasReducer, filtersReducer }) => {
  //   return {
  //     items: pizzasReducer.items,
  //     sortBy: filtersReducer.sortBy,
  //   };
  // });

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
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzasReducer.items,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzasObj: (items) => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
