import React from "react";
import HeroImage from "../assets/images/hero.png";
import OpenSea from "../assets/images/opensea.png";
import Polygon from "../assets/images/polygon.png";
import Elipse1 from "../assets/images/Elipse1.png";
import Elipse2 from "../assets/images/Elipse2.png";
import HeroBG from "../assets/images/HeroBG.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroBG">
        <img src={HeroBG} alt="Hero Background"></img>
      </div>
      <div className="elipse1">
        <img src={Elipse1} alt="Elipse Background"></img>
      </div>
      <div className="elipse2">
        <img src={Elipse2} alt="Elipse Background"></img>
      </div>
      <div className="container">
        <div className="heroContent">
          <h1>Panda of Borderlands</h1>
          <h4>
            In the near future, 4 panda kingdoms will fight over 1 territory
            Panda of Borderland is a unique collection of 10,000 Non-Fungible
            Tokens conquering the polygon blockchain.
          </h4>
          <div className="comingSoon">COMING SOON</div>
          <div className="dFlex alignCenter justifyCenter">
            <div className="btn btn-red">Minting</div>
          </div>
          <div className="dFlex alignCenter justifyCenter heroLogo">
            <img src={OpenSea} alt="OpenSea" />
            <img src={Polygon} alt="Polygon" />
          </div>
        </div>
        <div className="heroImage">
          <img src={HeroImage} alt="Panda of Borderlands"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
