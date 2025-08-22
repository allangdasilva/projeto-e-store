import React from "react";
import HomeProducts from "../../components/Home/HomeProducts";

const Home = () => {
  return (
    <main>
      <HomeProducts productsCategory={"clothes"} />
      {/* <HomeProducts productsCategory={"electronics"} />
      <HomeProducts productsCategory={"furniture"} />
      <HomeProducts productsCategory={"shoes"} />
      <HomeProducts productsCategory={"miscellaneous"} /> */}
    </main>
  );
};

export default Home;
