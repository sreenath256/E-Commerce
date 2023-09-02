import { React, Suspense, useEffect, useState } from "react";
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
  const [getEmail, setGetEmail] = useState(localStorage.getItem("emailData"));

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div>
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center">
            <BarLoader color="#f6c400" height={4} />
          </div>
        }
      >
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
              <Route exact path="/home" element={<Home />}></Route>

              <Route
                exact
                path="/home/category/:title"
                element={<ProductList />}
              ></Route>

              <Route
                exact
                path="/sign-in"
                element={<SignIn fun={setGetEmail} />}
              ></Route>
              <Route path="/" element={<SignUp fun={setGetEmail} />}></Route>
            </Routes>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default App;
