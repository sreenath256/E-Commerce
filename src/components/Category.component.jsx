import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { id, title, url } = props;
  return (
    <div
      className="  w-96 h-32 bg-white flex flex-row items-center m-6 md:w-80 md:h-96 md:flex-col  duration-200   "
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
    >
      <div className=" w-1/3 h-2/3 md:w-full flex justify-center overflow-hidden">
        <img className="w-full object-contain md:hover:scale-110  duration-1000 " src={url} alt="" />
      </div>
      <div className="w-64 h-full md:h-1/3 flex flex-col justify-center items-center text-center  ">
        <div className="mt-5 w-full md:border-t-2 flex flex-col justify-center items-start md:items-center">
          <h1 className="text-xl">{title}</h1>
          <Link to={{ pathname: `category/${props.title}` }}>
            <button className=" w-40 text-lg bg-yellow-300 rounded-md my-2 font-normal hover:bg-yellow-500">
              {" "}
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
