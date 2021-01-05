import React from "react";
import classNames from "classnames";

export default function Button({ onClickFn, className, outline, children }) {
  return (
    <button
      onClick={onClickFn}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}
