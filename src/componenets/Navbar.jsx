import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="
  flex
  p-4
  justify-between
  align-middle
  "
      >
        <div className="flex justify-center align-middle">
          {/* logo on the left */}
          <img src={Logo} alt="/" />
        </div>
        <div
          className="
        flex
        p-4
        "
        >
          {/* account and cart container */}
          <div className="mx-4 hover:scale-110 cursor-pointer ease-in duration-150">
            {/* cart */}
          </div>
          <div className="mx-4 hover:scale-110 cursor-pointer ease-in duration-150">
            {/* account */}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
