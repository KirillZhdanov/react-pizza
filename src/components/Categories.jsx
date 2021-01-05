import React from "react";
import { useState } from "react";

export default function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((categoryName, idx) => (
            <li
              className={activeItem === idx ? "active" : ""}
              onClick={() => onSelectItem(idx)}
              key={`${categoryName}_${idx}`}
            >
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
}
