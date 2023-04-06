import React from "react";

const Navbar = () => {
  return (
    <nav className="container display-f jc-sb">
      <div className="display-f ai-c">
        <span className="oval"></span>
        <h1 className="logo-text">Designo</h1>
      </div>
      <div>
        <a className="nav-link font-h3 text-black" href="#">
          Our Company
        </a>
        <a className="nav-link font-h3 text-black" href="#">
          Locations
        </a>
        <a className="nav-link font-h3 text-black" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
