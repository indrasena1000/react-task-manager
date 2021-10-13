import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
const Header = (props) => {
  return (
    <div className="header">
      <h1>Task Manager</h1>
      <Button
        color={props.showAddTask ? "red" : "green"}
        text={props.showAddTask ? "Close" : "Add"}
        onClick={props.onshowAddTask}
      />
    </div>
  );
};

export default Header;
