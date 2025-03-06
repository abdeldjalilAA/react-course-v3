import React from "react";
import NavbarLinks from "./navbarLinks";
import Button from "./button";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h5 className="">CONTEXT API</h5>
        <NavbarLinks></NavbarLinks>
      </div>
    </>
  );
};

export default Navbar;
