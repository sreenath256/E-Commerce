import { React, Suspense, useState } from "react";
import Home from "./components/Screen/Home.screen";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/Screen/ProductList.screen";
import NavBar from "./components/NavBar";
import { BarLoader } from "react-spinners";

const App = () => {
  const [loading,setLoading]=useState(true)
  
   setTimeout(() => {
    setLoading(false)
  }, 2000);
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

        <div className="pb-14">
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="category/:title" element={<ProductList />}></Route>
        </Routes>
        </div>
        }
      </Suspense>
    </div>
  );
};

export default App;
