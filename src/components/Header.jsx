import React from "react";
import Logob from "../assets/Logo.png";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Home = () => {
  return (
    <div className="">
      <header>
        <div className="flex  justify-between mx-12
 ">
          <img
            src={Logob}
            alt="Logo"
            className="w-20 h-auto  "
          />
          <div className="flex gap-x-5 items-center">
            <h1>Men</h1>
            <h1>Women</h1>
            <h1>Kids</h1>
            <h1>Brands</h1>
            <h1>Contact</h1>
          </div>

          <div className="flex ml-20 items-center gap-x-5  ">
            {" "}
            <div>
              <Person2Icon className="" />
            </div>
            <div>
              <ShoppingBagIcon className="" />
            </div>
          </div>
        </div>

        <div></div>
      </header>
    </div>
  );
};

export default Home;
