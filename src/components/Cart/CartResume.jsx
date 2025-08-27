import { useSelector } from "react-redux";
import style from "./CartResume.module.css";
import {
  selectTotalPrice,
  selectTotalProducts,
} from "../../redux/cart/cart-selector";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const CartResume = () => {
  const { data } = useSelector((state) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);
  const totalProducts = useSelector(selectTotalProducts);
  const products = Object.values(data);

  if (products.length === 0) return <div>Add Items to Cart</div>;
  return (
    <section className={style.section}>
      <CartProduct products={products} />
      <div>Products ({totalProducts})</div>
      <div>Total: ${totalPrice}</div>

      <Link to={`/checkout`}>Checkout</Link>
    </section>
  );
};

export default CartResume;
