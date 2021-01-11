import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  items,
  onClickItem,
  activeCategory,
}) {
  const onSelectItem = (index) => {
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((categoryName, idx) => (
            <li
              className={activeCategory === idx ? "active" : ""}
              onClick={() => onSelectItem(idx)}
              key={`${categoryName}_${idx}`}
            >
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
});
Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  //activeCategory: PropTypes.oneOf([PropTypes.number, PropTypes.null]),
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};

export default Categories;
