import React from "react";
import HeroImage from "../assets/images/hero.png";
import OpenSea from "../assets/images/opensea.png";
import Polygon from "../assets/images/polygon.png";
import Ellipse1 from "../assets/images/Elipse1.png";
import Ellipse2 from "../assets/images/Elipse2.png";
import HeroBG from "../assets/images/HeroBG.png";

const Hero = () => {

  return (
    <div className="hero" id="top">
      <div className="heroBG">
        <img src={HeroBG} alt="Hero Background"></img>
      </div>
      <div className="ellipse1">
        <img src={Ellipse1} alt="Elipse Background"></img>
      </div>
      <div className="ellipse2">
        <img src={Ellipse2} alt="Elipse Background"></img>
      </div>
      <div className="container">
        <div className="heroContent">
          <h1 className="animate__animated animate__fadeInLeft">Panda of Borderlands</h1>
          <h4 className="animate__animated animate__fadeInLeft animate__delay-1s">
            In the near future, 4 panda kingdoms will fight over 1 territory
            Panda of Borderland is a unique collection of 10,000 Non-Fungible
            Tokens conquering the polygon blockchain.
          </h4>
          <div className="comingSoon">COMING SOON</div>
          <a className="dFlex alignCenter justifyCenter" href="https://pandaofborderlands.com/mint">
            <div className="btn btn-red animate__animated animate__bounce animate__delay-2s">Minting</div>
          </a>
          <div className="dFlex alignCenter justifyCenter heroLogo">
            <img src={OpenSea} alt="OpenSea" />
            <img src={Polygon} alt="Polygon" />
          </div>
        </div>
        <div className="heroImage animate__animated animate__fadeInDown">
          <img src={HeroImage} alt="Panda of Borderlands"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
