import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../../assets/productList";
import Category from "../Category.component";
import ProductCard from "../ProductCard.component";

const ProductList = () => {
  const { title } = useParams();
  const [object, setObject] = useState([]);
  useEffect(() => {
    productList.forEach((element) => {
      if (element.title === title) {
        setObject(element.products);
      }
    });
  }, []);

  // console.log(object);
  return (
    <div className="flex flex-wrap flex-row">
        {
          object.map((obj)=>{
            return <ProductCard key={obj.id} products={obj}/>
          })  
        }
    </div>
  );
};

export default ProductList;
