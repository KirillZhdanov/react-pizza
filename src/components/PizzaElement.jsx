import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function PizzaElement({ additionalInfo }) {
  const {
    id,
    imageUrl: image,
    name: title,
    types,
    sizes,
    price,
    category,
    rating,
  } = additionalInfo;

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (size) => {
    setActiveSize(size);
  };
  const typeLabels = ["тонкое", "традиционное"];
  const sizeLabels = [26, 30, 40];
  const [selectedActiveType, setActiveType] = useState(types[0]);
  const [selectedActiveSize, setActiveSize] = useState(sizes[0]);
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <p style={{ display: "none" }}>{(id, category, rating)}</p>
      <div className="pizza-block__selector">
        <ul>
          {typeLabels &&
            typeLabels.map((el, idx) => (
              <li
                key={`${el}_${idx}`}
                onClick={() => onSelectType(idx)}
                className={classNames({
                  active: selectedActiveType === idx,
                  disabled: !types.includes(idx),
                })}
              >
                {el}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            sizeLabels.map((size, idx) => (
              <li
                key={`${size}_${idx}`}
                onClick={() => onSelectSize(size)}
                className={classNames({
                  active: selectedActiveSize === size,
                  disabled: !sizes.includes(size),
                })}
              >
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} руб.</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}
PizzaElement.propTypes = { name: PropTypes.string, price: PropTypes.number };
