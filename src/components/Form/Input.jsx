import React from "react";

const Input = ({ name, type, label, setPassword, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={({ target }) => setPassword(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
