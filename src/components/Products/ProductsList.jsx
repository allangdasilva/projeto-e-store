import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsAsync } from "../../redux/products/products-reducer";
import ProductWrapper from "../ProductWrapper/ProductWrapper";
import style from "./ProductsList.module.css";

const ProductsList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data[id]);
  const { hasMore } = useSelector((state) => state.products);
  const [itemsOffset, setItemsOffset] = React.useState(0);

  React.useEffect(() => {
    dispatch(productsAsync(id, itemsOffset));
  }, [dispatch, id, itemsOffset]);

  if (!products) return null;
  return (
    <section className={style.section}>
      <ProductWrapper products={products} />
      {hasMore && (
        <button onClick={() => setItemsOffset((i) => i + 4)}>Load More</button>
      )}
    </section>
  );
};

export default ProductsList;
