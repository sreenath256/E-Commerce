import React, { useEffect } from "react";
import Category from "../Category.component";
import Banner from "../Banner.component";
import { categories } from "../../assets/categoryList";
import NavBar from "./../NavBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      console.log("User is signed in",user);
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("User is signed out");
    }
  });

  return (
    <div>
      <div className="pb-14">
        <NavBar />
      </div>

      <Banner />

      <div
        id="categories"
        className="flex items-center flex-col md:flex-row flex-wrap justify-center mt-5"
      >
        {categories.map((obj) => {
          return <Category key={obj.id} title={obj.title} url={obj.url} />;
        })}
      </div>
    </div>
  );
};

export default Home;
