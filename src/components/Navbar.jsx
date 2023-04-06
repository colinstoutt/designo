import React from "react";

const Navbar = () => {
  return (
    <nav className="container display-f jc-sb">
      <div className="display-f ai-c">
        <span className="oval"></span>
        <a className="logo-text" href="/">
          <h1 className="">Designo</h1>
        </a>
      </div>
      <div>
        <a className="nav-link font-h3 text-black" href="/about">
          Our Company
        </a>
        <a className="nav-link font-h3 text-black" href="/locations">
          Locations
        </a>
        <a className="nav-link font-h3 text-black" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
