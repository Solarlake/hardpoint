import React, {useContext} from 'react';
import starImage from './assets/images/star_long.png';
import UserInfo from './components/UserInfo';
import Cursor from './components/Cursor';
import { MouseContext } from './context/MouseContext';
import MenuLink from './components/MenuLink';

import {TweenMax, Power3} from 'gsap';

const App = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <>
            <Cursor />
            <div className="container-homepage">
                <div className="topbar-container">
                    <div className="topbar">
                        <p>LANDING</p>
                        <div className="container-topcenter">
                            <p>HARDPOINT // KEN LIN</p>
                        </div>
                        <p>LANDING</p>
                    </div>
                </div>
                

                <img src={starImage} alt="" className="star topleft" />
                <img src={starImage} alt="" className="star topright" />
                <img src={starImage} alt="" className="star bottomleft" />
                <img src={starImage} alt="" className="star bottomright" />
                
                <div className="header-container">
                    <p className="header">HARDPOINT</p>

                    <div className="container-nav">
                        <div className="nav">
                            <MenuLink text="LANDING" />
                            <MenuLink text="PROJECTS" />
                            <MenuLink text="GALLERY" />
                            <MenuLink text="ABOUT" />
                            <MenuLink text="CONTACT" />
                        </div>
                    </div>
                </div>

                <div className="info-container">
                    <UserInfo />
                </div>
                <p className="time">

                </p>
            </div>
        </>
    );
}

export default App