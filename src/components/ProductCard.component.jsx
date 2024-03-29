import React from "react";


const ProductCard = (props) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
      <div className="w-5/6 pb-2 mt-4 bg-gray-50  ">
        <div className=" w-full h-60 flex justify-center ">
          <img
            className="w-5/6 object-contain "
            src={props.products.images[2]}
            alt=""
          />
        </div>
        <div className="m-2 w-full h-24 text-lg overflow-hidden leading-6 ">
          <h1>{props.products.pName}</h1>
        </div>
        <div className="w-full h-1/5 flex items-end">
          <div className="w-1/2  m-2 flex-col">
            <h1 className="text-3xl ml-1">₹{props.products.rate}</h1>
            <h1 className="text-blue-500 mt-1">{props.products.brand}</h1>
          </div>

          <div className="w-1/2 h-3/5 m-3 text-center bg-yellow-300 flex justify-center items-center cursor-pointer    md:hover:bg-gray-700 md:hover:text-white duration-200">
            <h1 className="text-lg ">ADD TO CART</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
