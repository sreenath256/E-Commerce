import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../../assets/productList";
import ProductCard from "../ProductCard.component";
import NavBar from './../NavBar';

const ProductList = () => {
  const { title } = useParams();
  const [object, setObject] = useState([]);
  const [discription, setDiscription] = useState("");
  useEffect(() => {
    productList.forEach((element) => {
      if (element.title === title) {
        setObject(element.products);
        setDiscription(element.discription);
        console.log(element);
      }
    });
  }, []);

 
  return (<>
  <div className="pb-14">
          <NavBar />
        </div>
  
    <div className="ml-8 my-5">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <h1 className=" my-2">{discription}</h1>
          </div>
      <div className="flex flex-wrap flex-row">
        {object.map((obj) => {
            return <ProductCard key={obj.id} products={obj} />;
        })}
      </div>
        </>
  );
};

export default ProductList;
