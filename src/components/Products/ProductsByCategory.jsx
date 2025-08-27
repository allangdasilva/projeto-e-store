import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./ProductsList.module.css";
import ProductWrapper from "./ProductWrapper";
import { productsByCategoryAsync } from "../../redux/products/products-filtered-reducer";

const ProductsList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products_filtered.data[id]);
  const { hasMore } = useSelector((state) => state.products_filtered);
  const [itemsOffset, setItemsOffset] = React.useState(0);

  React.useEffect(() => {
    dispatch(productsByCategoryAsync(id, itemsOffset));
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
