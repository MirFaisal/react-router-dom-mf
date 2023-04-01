import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className=" bg-slate-500">
      <div className="container flex justify-center py-5 font-bold">
        <Link className="nav" to={"/"}>
          Home
        </Link>
        <Link className="nav" to={"/about"}>
          about
        </Link>
        <Link className="nav " to={"/contact"}>
          contact
        </Link>
        <Link className="nav " to={"/friends"}>
          Friends
        </Link>
      </div>
    </div>
  );
};

export default Header;
