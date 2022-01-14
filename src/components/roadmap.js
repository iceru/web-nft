import React from "react";
import HeroBG from '../assets/images/HeroBG.png';
import Ellipse1 from '../assets/images/elipse-1-roadmap.png';
import Ellipse2 from '../assets/images/elipse-2-roadmap.png';

const Roadmap = () => {
  return (
    <div className="roadmap">
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
        <h2 className="title">Roadmap</h2>
        
        <div className="mobileSwipe">
          Swipe <span><img src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png" alt="Chevron Right"/></span>
        </div>
        <div className="dFlex">
          <div className="q1">
            <div className="dashLine"></div>
            <h4>Q1 2022</h4>
            <ul>
              <li>Create 10.000 NFT on Blockchain Polygon</li>
              <li>
                Create Sosial Media <br></br> (Website, Twitter, Instagram, Discord)
              </li>
            </ul>
          </div>
          <div className="q2">
            <div className="dashLine"></div>
            <h4>Q2 2022</h4>
            <ul>
              <li>Promotion Giveaway</li>
              <li>Pre-Sale 30 Matic Polygon</li>
              <li>POB Creative </li>
              <li>Sold Out NFT</li>
            </ul>
          </div>
          <div className="q3">
            <ul>
              <li>
                POB Merch store open to the public <br></br> additional  all POB holder are
                given access <br></br> to exclusive access limited edition merch drop
              </li>
              <li>Make comic story</li>
              <li>Floor Price  1 Eth</li>
            </ul>
            <h4>Q3 2022</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
