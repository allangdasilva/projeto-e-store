import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeProductsAsync } from "../../redux/products/products-reducer";
import style from "./HomeProducts.module.css";
import { Link } from "react-router-dom";
import ProductWrapper from "../ProductWrapper/ProductWrapper";

const HomeProducts = ({ productsCategory, categoryName }) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products.data[productsCategory]
  );

  React.useEffect(() => {
    dispatch(homeProductsAsync(productsCategory));
  }, [dispatch, productsCategory]);

  if (!products) return null;
  return (
    <section className={style.section}>
      <ProductWrapper products={products} />
      <Link to={`/products/${productsCategory}`}>Shop {categoryName}</Link>
    </section>
  );
};

export default HomeProducts;
