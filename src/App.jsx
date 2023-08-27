import React from "react";
import Home from "./components/Screen/Home.screen";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/Screen/ProductList.screen";
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <div className="pb-14">
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="category/:title" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
};

export default App;
