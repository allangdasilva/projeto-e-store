import { useDispatch } from "react-redux";
import style from "./CartProduct.module.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cart/cart-reducer";

const CartProduct = ({ products }) => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default CartProduct;
