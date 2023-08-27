import React, { useState } from "react";

const NavBar = () => {
  const handleClick = (e) => {
    e.target.classList.toggle("fa-bounce");
    setTimeout(() => {
      e.target.classList.remove("fa-bounce");
    }, 1000);
  };
  return (
    <div className="w-full h-16 bg-[#ffd13d] fixed p-2 flex justify-between items-center" style={{boxShadow:'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}}>
      <h1 className="font-SpaceMono text-3xl">
        <a href="#">Logo</a>
      </h1>
      <input
        type="text"
        className="w-1/2 h-10 rounded-md outline-yellow-300 pl-4"
        placeholder="Search your items..."
      />
      <div className="flex w-40 pr-4 text-xl font-SpaceMono justify-between items-center">
        <h1>Account</h1>
        <h1 onClick={handleClick}>
          <i
            className="fa-solid fa-cart-shopping  fa-lg"
            style={{ color: "#000000" }}
            
          ></i>
          0
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
