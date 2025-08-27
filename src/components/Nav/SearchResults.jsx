import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductWrapper from "../Products/ProductWrapper";
import style from "./SearchResults.module.css";

const SearchResults = () => {
  const { data } = useSelector((state) => state.products);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q") || "";
  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!data) return null;
  return (
    <div>
      <h2>Resultados para: {query}</h2>
      <section className={style.section}>
        {filteredProducts.length ? (
          <ProductWrapper products={filteredProducts} />
        ) : (
          <p>No results found</p>
        )}
      </section>
    </div>
  );
};

export default SearchResults;
