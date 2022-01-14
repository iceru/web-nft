import React, { useEffect } from "react";
import Logo from "../assets/images/nav-logo.png";
import OpenSea from "../assets/images/opensea.png";
import Polygon from "../assets/images/polygon.png";
import OpenSeaSmall from "../assets/images/social/opensea-small.png";
import Discord from "../assets/images/social/discord.png";
import Instagram from "../assets/images/social/instagram.png";
import Twitter from "../assets/images/social/twitter.png";
import BackgroundFooter from "../assets/images/BackgroundFooter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="heroBG">
        <img src={BackgroundFooter} alt="Hero Background"></img>
      </div>
      <div className="container">
        <div className="footerInfo">
          <div className="footerLogo">
            <img src={Logo} alt="POB"></img>
          </div>
          <div className="footerText">
            In the near future, 4 panda kingdoms will fight over 1 territory
            Panda of Borderland is a unique collection of 10,000 Non-Fungible
            Tokens conquering the polygon blockchain.
          </div>
          <div className="dFlex footerPlatform">
            <div>
              <img src={OpenSea} alt="OpenSea"></img>
            </div>
            <div>
              <img src={Polygon} alt="Polygon"></img>
            </div>
          </div>
        </div>

        <div className="footerConnect">
          <h5>Connect With Us</h5>

          <form className="footerEmail">
            <input name="email" type="email" placeholder="Email"></input>
            <button className="btn">Submit</button>
          </form>

          <div className="dFlex socialMedia">
            <a href="#">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={Discord} alt="Discord" />
            </a>
            <a href="#">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={OpenSeaSmall} alt="OpenSea" />
            </a>
          </div>
          <div className="footerLink">
            <a href="#">POB Terms and Condition</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
