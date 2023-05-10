import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  const [accDropDown, setAccDropDown] = useState(false);
  const handleDropDown = () => {
    setAccDropDown((prev) => !prev);
  };
  return (
    <>
      <div
        id="navbar"
        className=" flex p-4 justify-between align-middle bg-gray-800"
      >
        <div className="flex justify-center align-middle">
          {/* logo on the left */}
          <img src={Logo} alt="/" />
        </div>
        <div className=" flex p-4 ">
          {/* account and cart container */}
          <div className="mx-4 hover:scale-125 cursor-pointer ease-in duration-150 relative">
            {/* cart */}
            <ShoppingCartIcon className=" text-gray-400" />
            <span className="bg-blue-400 rounded-full w-4 h-4 text-sm absolute flex justify-center items-center top-[-10px] right-[-10px]">
              1
            </span>
          </div>
          <div className="mx-4 hover:scale-125 cursor-pointer ease-in duration-150">
            {/* account */}
            <AccountCircleIcon
              className=" text-gray-400"
              onClick={handleDropDown}
            >
              {accDropDown && (
                <div className="absolute w-10 h-10">
                  <span>Register</span>
                  <span>Login</span>
                </div>
              )}
            </AccountCircleIcon>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
