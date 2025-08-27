import { useDispatch, useSelector } from "react-redux";
import style from "./ProductWrapper.module.css";
import { addToCart, removeFromCart } from "../../redux/cart/cart-reducer";
import { Link } from "react-router-dom";

const ProductWrapper = ({ products }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  const { data: dataUser } = useSelector((state) => state.login);

  return (
    <>
      {products.map((product) => (
        <div className={style.productWrapper} key={product.id}>
          <img
            src={product.images}
            alt={product.title}
            onError={(e) => (e.target.src = "/images/no-image-available.webp")}
          />
          <h3>{product.title}</h3>
          <p className={style.productDescription}>{product.description}</p>
          <span>{product.category.name}</span>
          <div>
            <p>${product.price}</p>

            {!dataUser?.access_token ? (
              <button>
                <Link to={`/login`}>Add to Cart</Link>
              </button>
            ) : (
              <>
                {data[product.id]?.id === product.id ? (
                  <button onClick={() => dispatch(removeFromCart(product))}>
                    Remove from Cart
                  </button>
                ) : (
                  <button onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductWrapper;
