import React from "react";
import HeroBG from "../assets/images/HeroBG.png";
import Ellipse1 from "../assets/images/elipse-1-roadmap.png";
import Ellipse2 from "../assets/images/elipse-2-roadmap.png";
import Tshirt from "../assets/images/tshirt.png";
import Hoodie from "../assets/images/hoodie.png";

const Merch = () => {
  return (
    <div className="merch">
      <div className="heroBG">
        <img src={HeroBG} alt="Hero Background"></img>
      </div>
      <div className="ellipse1">
        <img src={Ellipse1} alt="Elipse Background"></img>
      </div>
      <div className="ellipse2">
        <img src={Ellipse2} alt="Elipse Background"></img>
      </div>
      <div className="container titleContainer">
        <h2 className="title">Merch</h2>
      </div>
      <div className="container">
        <div className="merchItem">
          <img src={Tshirt} alt="T-Shirt"></img>
        </div>
        <div className="merchItem">
          <img src={Hoodie} alt="Hoodie"></img>
        </div>
      </div>
    </div>
  );
};

export default Merch;
