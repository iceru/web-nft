import React from "react";

const NavigationMobile = ({ setOpen, open }) => {
  return (
    <div className={`navigation-mobile ${open ? "open" : ""}`} open={open}>
      <div className="close">
        <img
          onClick={() => setOpen(!open)}
          src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
          alt="close"
        />
      </div>
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
        <a href="https://pandaofborderlands.com/mint" className="btnWrapper">
          <li className="btn btn-red">Minting</li>
        </a>
      </ul>
    </div>
  );
};

export default NavigationMobile;
