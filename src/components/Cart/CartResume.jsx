import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CartResume.module.css";
import {
  selectTotalPrice,
  selectTotalProducts,
} from "../../redux/cart/cart-selector";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cart/cart-reducer";
import { Link } from "react-router-dom";

const CartResume = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);
  const totalProducts = useSelector(selectTotalProducts);
  const products = Object.values(data);

  if (products.length === 0) return <div>Add Items to Cart</div>;
  return (
    <section className={style.section}>
      <ul>
        {products.map((product) => (
          <li className={style.li} key={product.id}>
            <img src={product.images[0]} alt={`Image of ${product.title}`} />
            <div>
              <h3>{product.title}</h3>
              <button
                aria-label={`Remove ${product.title}`}
                onClick={() => dispatch(removeFromCart(product))}
              >
                Trash
              </button>
            </div>
            <div className={style.liCounter}>
              <button
                aria-label={`Decrease ${product.title}`}
                disabled={product.quantity === 1}
                onClick={() => dispatch(decreaseQuantity(product))}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                aria-label={`Increase ${product.title}`}
                onClick={() => dispatch(increaseQuantity(product))}
              >
                +
              </button>
            </div>
            <span>$ {product.price * product.quantity}</span>
          </li>
        ))}
      </ul>
      <div>Products ({totalProducts})</div>
      <div>Total: ${totalPrice}</div>

      <Link to={`/checkout`}>Checkout</Link>
    </section>
  );
};

export default CartResume;
