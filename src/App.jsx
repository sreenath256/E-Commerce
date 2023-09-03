import { React, useState } from "react";
import Home from "./components/Screen/Home.screen";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./components/Screen/ProductList.screen";
import { BarLoader } from "react-spinners";
import SignIn from "./components/SignIn.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/SignUp.component";

const App = () => {
  const [loading, setLoading] = useState(true);
  

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  

  return (
    <div>
      
        {loading ? (
          <div className="h-screen w-full flex items-center justify-center">
            <BarLoader color="#f6c400" height={4} />
          </div>
        ) : (
          <div>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              limit={2}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="light"
            />

            <Routes>
              
                <Route  path="/home" element={<Home />}></Route>
               
                <Route exact path="/" element={<SignUp  />}></Route>
              
              <Route path="*" element={<h1>404 not found</h1>}></Route>
              <Route
                
                path="/home/category/:title"
                element={<ProductList />}
              ></Route>

              <Route
                
                path="/sign-in"
                element={<SignIn  />}
              ></Route>
            </Routes>
          </div>
        )}
      
    </div>
  );
};

export default App;
