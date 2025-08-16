import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsAsync } from "../../redux/products/products-reducer";

const ProductsList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data[id]);

  React.useEffect(() => {
    //dispatch(productsAsync(id));
  }, [dispatch, id]);

  if (!products) return null;
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
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
    </div>
  );
};

export default ProductsList;
