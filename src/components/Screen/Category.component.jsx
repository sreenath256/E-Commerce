import React from "react";

const Category = (props) => {
  const { id, title, url } = props;
  return (
    <div className="  w-72 h-80 bg-white flex justify-center m-6 md:w-80 md:h-96  " style={{boxShadow : ' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',transform:'scale(1.02)'}} >
      <div className="w-64 h-full flex flex-col justify-center items-center text-center">
        <img src={url} alt="" />
        <div className="mt-4 flex flex-col justify-center"> 
          <h1 className="text-xl">{title}</h1>
          <button className="text-lg bg-yellow-300 rounded-md my-2 font-normal"> Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
