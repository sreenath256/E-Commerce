import React from "react";
import Category from "./Category.component";
import Banner from "./Banner.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Gaming accessories",
      url: "https://m.media-amazon.com/images/I/71ud68+jS-L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      title: "Toys Under 500₹",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_758x608_2X_en_US._SY608_CB609318944_.jpg",
    },
    {
      id: 3,
      title: "Electronics",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg",
    },
    {
      id: 4,
      title: "Shop school essentials",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_2X._SY608_CB630084689_.jpg",
    },
    {
      id: 5,
      title: "Home $ Kitchen Under 500₹",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_758x608_2X_en_US._SY608_CB609304299_.jpg",
    },
    {
      id: 6,
      title: "Health & Personal Care",
      url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg",
    },
    {
      id: 7,
      title: "Beauty picks",
      url: "https://m.media-amazon.com/images/I/71ud68+jS-L._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];

  return (
    
    <div>
        <Banner/>
        
      <div id="categories" className="flex items-center flex-col md:flex-row flex-wrap justify-center mt-5">
        {categories.map((obj) => {
            return <Category key={obj.id} title={obj.title} url={obj.url} />;
        })}
      </div>
        </div>
    
  );
};

export default Home;
