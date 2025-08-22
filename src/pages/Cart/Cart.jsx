import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartResume from "../../components/Cart/CartResume";

const Cart = () => {
  const { data } = useSelector((state) => state.login);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!data?.access_token) navigate("/login");
  }, [data]);

  return (
    <main>
      <CartResume />
    </main>
  );
};

export default Cart;
