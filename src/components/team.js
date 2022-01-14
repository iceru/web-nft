import React from "react";
import HeroBG from "../assets/images/HeroBG.png";
import Ellipse1 from "../assets/images/ellipse-1-collections.png";
import Ellipse2 from "../assets/images/Elipse2.png";
import Panda8 from "../assets/images/Panda 8 1.png";
import Panda7 from "../assets/images/Panda 7 1.png";
import Panda5 from "../assets/images/Panda 5 1.png";
import PandaCommunity from "../assets/images/Panda 10.png";

const Team = () => {
  return (
    <div className="team">
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
        <h2 className="title" data-aos="fade-right" data-aos-duration="1000">Team</h2>
      </div>
      <div className="container" data-aos="fade-right" data-aos-duration="2000">
        <div className="teamItem" >
          <img src={Panda8} alt="Okta Dwi Luki"></img>
          <div className="teamText name">
            <b>Okta Dwi Luki</b>
          </div>
          <div className="teamText">Founder</div>
        </div>
        <div className="teamItem">
          <img src={Panda7} alt="Kartika Ris Andrianti"></img>
          <div className="teamText name">
            <b>Kartika Ris Andrianti</b>
          </div>
          <div className="teamText">Marketing </div>
        </div>
        <div className="teamItem">
          <img src={Panda5} alt="Arif Rahkmansyah"></img>
          <div className="teamText name">
            <b>Arif Rahkmansyah</b>
          </div>
          <div className="teamText">Design</div>
        </div>
      </div>

      <div className="community">
        <div className="container">
          <div className="communityText" data-aos="fade-left" data-aos-duration="2000">
            <div className="title">
              JOIN THE <br></br> COMMUNITY
            </div>
            <div className="subtitle">
              Join our Discord community and choose which side to get the latest
              hints about Panda Of Borderlands.
            </div>
            <a className="btn" href="https://discord.gg/7wyJ32zzJp">
              Join Our Discord
            </a>
          </div>
          <div className="communityImage" data-aos="fade-left" data-aos-duration="1000">
            <div>
              <img src={PandaCommunity} alt="Join the Community"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
