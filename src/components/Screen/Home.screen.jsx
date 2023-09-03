import React, { useEffect } from "react";
import Category from "../Category.component";
import Banner from "../Banner.component";
import { categories } from "../../assets/categoryList";
import NavBar from "./../NavBar";

const Home = () => {

  

  return (
    <div>
      <div className="pb-14">
        <NavBar />
      </div>

      <Banner />

      <div
        id="categories"
        className="flex items-center flex-col md:flex-row flex-wrap justify-center mt-5"
      >
        {categories.map((obj) => {
          return <Category key={obj.id} title={obj.title} url={obj.url} />;
        })}
      </div>
    </div>
  );
};

export default Home;
