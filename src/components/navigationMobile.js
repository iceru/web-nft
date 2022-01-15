import React, {useState} from "react";

const NavigationMobile = ({ setOpen, open }) => {
  const [drop, setDrop] = useState(false);
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
        <div onClick={ () => setDrop(!drop)} className={`socialMediaDropdown ${drop ? "open" : ""}`}>
          <li>Social Media <span><img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="chevron down"/></span></li>
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
        <a href="https://pandaofborderlands.com/mint" className="btnWrapper">
          <li className="btn btn-red">Minting</li>
        </a>
      </ul>
    </div>
  );
};

export default NavigationMobile;
