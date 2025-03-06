import React from "react";
import Button from "./button";

export const NavbarLinks = () => {
  return (
    <li className="nav-links">
      <ol>
        <a href="">home</a>
      </ol>
      <ol>
        <a href="">About</a>
      </ol>
      <Button />
    </li>
  );
};

export default NavbarLinks;
