import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close form' : 'Add Team Member'} onClick={onAdd} />
    </header>
  );
};

export default Header;