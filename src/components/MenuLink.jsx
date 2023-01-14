import React, { useContext, useState } from 'react';
import dot from '../assets/images/dot.png';
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
            <img src={dot} alt="" className="dot"/>
            <p>
                {text}
                <div className="line"></div>
            </p>
            
        </div>
    );
};

export default MenuItem;