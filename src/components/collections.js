import React from "react";
import HeroBG from "../assets/images/HeroBG.png";
import Ellipse1 from "../assets/images/ellipse-1-collections.png";
import Ellipse2 from "../assets/images/Elipse2.png";
import Panda1 from "../assets/images/Panda 1.png";
import Panda2 from "../assets/images/Panda 2 1.png";
import Panda3 from "../assets/images/Panda 3 1.png";
import Panda4 from "../assets/images/Panda 4 1.png";
import Panda5 from "../assets/images/Panda 5 1.png";
import Panda6 from "../assets/images/Panda 6 1.png";
import Panda7 from "../assets/images/Panda 7 1.png";

const Collections = () => {
  const images = [
    Panda1,
    Panda2,
    Panda3,
    Panda4,
    Panda5,
    Panda6,
    Panda7,
    Panda1,
    Panda2,
    Panda3,
    Panda4,
    Panda5,
    Panda6,
    Panda7,
  ];

  return (
    <div className="collections">
      <div className="heroBG">
        <img src={HeroBG} alt="Hero Background"></img>
      </div>
      <div className="ellipse1">
        <img src={Ellipse1} alt="Elipse Background"></img>
      </div>
      <div className="ellipse2">
        <img src={Ellipse2} alt="Elipse Background"></img>
      </div>
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="title" >Panda Of Borderlands</h2>
        <h4 className="subtitle">
          In the near future, 4 panda kingdoms will fight over 1 territory Panda
          of Borderland is a unique collection of <b> 10,000 Non-Fungible Tokens </b>
          conquering the polygon blockchain.
        </h4>
      </div>

      <div className="imageCollections" data-aos="fade-up" data-aos-duration="2000">
        <div className="running">
          <div className="dFlex">
            {images.map((image, i) => (
              <div className="item">
                <img src={image} alt="Panda"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
