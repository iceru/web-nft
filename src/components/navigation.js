import React from 'react';
import Logo from '../assets/images/nav-logo.png'

const Navigation = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbarLogo'>
                    <img src={Logo} alt="Panda of Borderlands"></img>
                </div>
                <div className='navigation'>
                    <ul>
                        <li>Home</li>
                        <li>Roadmap</li>
                        <li>Merch</li>
                        <li>Team</li>
                        <li>Social Media</li>
                        <li class="btn">Minting</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;