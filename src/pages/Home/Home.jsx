import React from "react";
import HomeProducts from "../../components/Home/HomeProducts";

const Home = () => {
  return (
    <main>
      <HomeProducts productsCategory={"1"} categoryName={"Clothes"} />
      <HomeProducts productsCategory={"2"} categoryName={"Electronics"} />
      <HomeProducts productsCategory={"3"} categoryName={"Furniture"} />
      <HomeProducts productsCategory={"4"} categoryName={"Shoes"} />
      <HomeProducts productsCategory={"5"} categoryName={"Miscellaneous"} />
    </main>
  );
};

export default Home;
