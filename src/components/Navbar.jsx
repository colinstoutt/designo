import React from "react";

const Navbar = () => {
  return (
    <nav className="container display-f jc-sb">
      <div className="display-f ai-c">
        <a className="logo-text" href="/">
          <img className="logo" src="https://i.imgur.com/cYqFcga.png" alt="" />
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
