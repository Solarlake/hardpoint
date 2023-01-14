import React, { useContext, useEffect, useRef } from 'react';
import '../styles/cursor.scss';
import { MouseContext } from '../context/MouseContext';

const Cursor = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const cursorPos = useRef(null);
    const cursorStyle = useRef(null);
    const state = useRef({
        cursorX: 0,
        cursorY: 0,
        targetX: 0,
        targetY: 0,
    });

    const cursorRadius = 10;

    useEffect(() => {
        document.addEventListener("mouseenter", () => {
            cursorChangeHandler("");
        });
        document.addEventListener("mouseleave", () => {
            cursorChangeHandler("cursor-hide");
        });
    }, []);

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {            
            state.current.targetX = event.clientX - cursorRadius / 2;
            state.current.targetY = event.clientY - cursorRadius / 2;
        });
    }, []);

    useEffect(() => {
        const followMouse = () => {
            requestAnimationFrame(followMouse);
            
            state.current.cursorX += (state.current.targetX - state.current.cursorX) * 0.14;
            state.current.cursorY += (state.current.targetY - state.current.cursorY) * 0.14;

            cursorPos.current.style.transform = `translate3d(${state.current.cursorX}px, ${state.current.cursorY}px, 0)`;
        };
        followMouse();
    }, []);

    return (
        
        <div className="cursor-base" ref={cursorPos}>
            <div className={"cursor-fill " + cursorType} ref={cursorStyle}></div>
        </div>
    );
};

export default Cursor;