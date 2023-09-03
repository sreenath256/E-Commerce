import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../utils/FireBase/firebase";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import CartDropDown from "./CartDropDown.component";

const NavBar = () => {

  const [isDropDownOpen,setIsDropDownOpen]=useState(false)
  

  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser();
    navigate("/");
  };

  const handleCart = (e) => {

    setIsDropDownOpen(!isDropDownOpen)
    e.target.classList.toggle("fa-bounce");
    setTimeout(() => {
      e.target.classList.remove("fa-bounce");
    }, 1000);
  };

  const { currentUser } = useContext(UserContext);
  return (
    <div
      className="w-full h-16 bg-[#ffd13d] fixed p-2 flex justify-between items-center"
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      }}
    >
      <h1 className="font-SpaceMono text-3xl">
        <Link to="/home">Logo</Link>
      </h1>
      <input
        type="text"
        className="w-1/2 h-10 rounded-md outline-yellow-300 pl-4"
        placeholder="Search your items..."
      />
      <div className="flex w-40 pr-4 text-lg font-SpaceMono justify-between items-center">
        <h1 onClick={handleLogout}>Logout</h1>
        <h1 onClick={handleCart}>
          <i
            className="fa-solid fa-cart-shopping  fa-lg"
            style={{ color: "#000000" }}
          >

          0
          </i>
        </h1>
        {
          isDropDownOpen &&
          <CartDropDown />
          
        }
        
      </div>
    </div>
  );
};

export default NavBar;
