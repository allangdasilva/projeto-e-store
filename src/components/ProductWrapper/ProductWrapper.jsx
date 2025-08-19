import style from "./ProductWrapper.module.css";

const ProductWrapper = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className={style.productWrapper} key={product.id}>
          <img
            src={product.images[0]}
            alt={product.title}
            onError={(e) => (e.target.src = "/images/no-image-available.webp")}
          />
          <h3>{product.title}</h3>
          <p className={style.productDescription}>{product.description}</p>
          <span>{product.category.name}</span>
          <div>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductWrapper;
