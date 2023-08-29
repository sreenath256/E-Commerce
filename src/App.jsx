import { React, Suspense, useEffect, useState } from "react";
import Home from "./components/Screen/Home.screen";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./components/Screen/ProductList.screen";
import { BarLoader } from "react-spinners";
import Authentication from "./components/Screen/Authentication.screen";

const App = () => {
  const [loading,setLoading]=useState(true)
  
   setTimeout(() => {
    setLoading(false)
  }, 1000);
  const navigate=useNavigate();

  useEffect(()=>{
  })
  return (
    <div>
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center">
            <BarLoader color="#f6c400" height={4} />
          </div>
        }
      >
        {
          loading ?  <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
        :
        <div>

        
        <Routes>
          
          <Route exact path="/" element={<Authentication/>}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/home/category/:title" element={<ProductList />}></Route>
        </Routes>
        </div>
        }
      </Suspense>
    </div>
  );
};

export default App;
