import React from "react";
import Logo from "../assets/images/nav-logo.png";

const Navigation = ({ open, setOpen }) => {
  return (
    <div className="navbar">
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
            <div className="socialMediaLink">
              <li>
                Social Media
              </li>

              <div className="dropdown">
                <ul>
                  <a href="https://twitter.com/pandaofb">
                    <li>Twitter</li>
                  </a>
                  <a href="https://discord.gg/7wyJ32zzJp">
                    <li>Discord</li>
                  </a>
                  <a href="https://www.instagram.com/pandaofborderlands/">
                    <li>Instagram</li>
                  </a>
                  <div>
                    <li>OpenSea</li>
                  </div>
                </ul>
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default Navigation;
