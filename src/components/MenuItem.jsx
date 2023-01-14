import React, { useContext, useState } from 'react';
import arrowImage from '../assets/images/arrow.png';
import { MouseContext } from '../context/MouseContext';

const MenuItem = ({ text }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const [fill, setFill] = useState(0);

    const handleHover = () => {
        setFill(100);
        cursorChangeHandler("cursor-large")
    };
    const handleUnhover = () => {
        setFill(0);
        cursorChangeHandler("")
    };

    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
            className="nav-item"
        >
            <div className="nav-item-fill" style={{height: `${fill}%`}}></div>
            <img src={arrowImage} alt="" className="arrow" />
            <p>{text}</p>
        </div>
    );
};

export default MenuItem;