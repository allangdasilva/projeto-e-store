import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { data } = useSelector((state) => state.login);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!data?.access_token) navigate("/login");
  }, [data]);

  return <div>Cart</div>;
};

export default Cart;
