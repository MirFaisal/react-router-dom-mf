import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Link
        className="nav
      "
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="nav
      "
        to={"/about"}
      >
        about
      </Link>
      <Link
        className="nav
      "
        to={"/contact"}
      >
        contact
      </Link>
    </div>
  );
};

export default Header;
