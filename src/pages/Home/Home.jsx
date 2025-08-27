import HomeProducts from "../../components/Products/HomeProducts";
import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useSelector((state) => state.products);
  const productsCategory = [...new Set(data?.map((el) => el.category.slug))];

  return (
    <main>
      {productsCategory.map((category, i) => (
        <HomeProducts key={category + i} productsCategory={category} />
      ))}
    </main>
  );
};

export default Home;
