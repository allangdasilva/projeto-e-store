import React from "react";

const Input = ({ name, type, label, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...props} />
    </div>
  );
};

export default Input;
