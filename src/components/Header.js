import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img alt="" className="col-md-6" src={Logo} />
      </Link>
    </div>
  );
};

export default Header;
