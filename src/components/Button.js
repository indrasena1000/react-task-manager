import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}{" "}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};
export default Button;