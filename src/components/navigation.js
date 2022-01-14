import React from "react";
import Logo from "../assets/images/nav-logo.png";

const Navigation = ({ open, setOpen }) => {
  return (
    <div className="navbar" id="top">
      <div className="container">
        <div className="navbarLogo">
          <img src={Logo} alt="Panda of Borderlands"></img>
        </div>
        <div className="navigation">
          <ul>
            <a href="#top">
              <li>Home</li>
            </a>
            <a href="#roadmap">
              <li>Roadmap</li>
            </a>
            <a href="#merch">
              <li>Merch</li>
            </a>
            <a href="#team">
              <li>Team</li>
            </a>
            <a href="https://linktr.ee/Pandaofb">
              <li>Social Media</li>
            </a>
            <a href="https://pandaofborderlands.com/mint">
              <li className="btn">Minting</li>
            </a>
          </ul>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <img
            src="https://img.icons8.com/ios/50/000000/menu.png"
            alt="hamburger"
          />
        </div>

        <div className={`navigation-mobile ${open ? "open" : ""}`} open={open}>
          <ul>
            <a href="#top">
              <li>Home</li>
            </a>
            <a href="#roadmap">
              <li>Roadmap</li>
            </a>
            <a href="#merch">
              <li>Merch</li>
            </a>
            <a href="#team">
              <li>Team</li>
            </a>
            <a href="https://linktr.ee/Pandaofb">
              <li>Social Media</li>
            </a>
            <a href="https://pandaofborderlands.com/mint">
              <li className="btn">Minting</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
