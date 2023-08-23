import React from "react";

const Banner = () => {
  return (
    <div className='w-full h-banner-size bg-[url("https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=1800&t=st=1692803019~exp=1692803619~hmac=f3b0f1233602a6d26a097811b97e4320978f9d9b6e554568d170a0c18498263c")]'>
      <div className="w-1/2 flex flex-col justify-center h-full ml-28"> 
        <h1 className="text-6xl mt-8 font-bold">Raining Offers For Hot Summer!</h1>
        <h1 className="text-2xl mt-8">25% Off On All Products</h1>
        <a href="#categories"><button className="bg-white w-28 h-10 mt-8 hover:bg-black hover:text-white transition duration-300 ease-in-out">SHOP NOW</button></a>
      </div>
    </div>
  );
};

export default Banner;
