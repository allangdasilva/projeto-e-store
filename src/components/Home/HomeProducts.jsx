import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeProductsAsync } from "../../redux/products/products-reducer";
import style from "./HomeProducts.module.css";
import { Link } from "react-router-dom";

const HomeProducts = ({ productsCategory, categoryName }) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products.data[productsCategory]
  );

  React.useEffect(() => {
    //dispatch(homeProductsAsync(productsCategory));
  }, [dispatch, productsCategory]);

  if (!products) return null;
  return (
    <section className={style.section}>
      {products.map((product) => (
        <div className={style.productWrapper} key={product.id}>
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span>{product.category.name}</span>
          <div>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
      <Link to={`/products/${productsCategory}`}>Shop {categoryName}</Link>
    </section>
  );
};

export default HomeProducts;
