import React, { useEffect, useState } from 'react';

const UserInfo = () => {
    const [userAgent, setUserAgent] = useState('');
    const [resolution, setResolution] = useState({});
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0});
    const [scrollDistance, setScrollDistance] = useState(0);
    const [time, setTime] = useState('');
    
    useEffect(() => {
        setUserAgent(navigator.userAgent);
    }, []);

    useEffect(() => {

        const handleResize = () => {
        setResolution({
            width: window.innerWidth,
            height: window.innerHeight
        });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
          setCursorPosition({
            x: event.clientX,
            y: event.clientY
          });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollDistance(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const options = { hour12: false, timeStyle: 'long', timeZone: 'America/New_York' };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const timeString = formatter.format(date);
            setTime(timeString);
        };
    
        const interval = setInterval(updateTime, 1000);
    
        updateTime();
    
        return () => {
            clearInterval(interval);
        };
    }, []);

    const infoString = userAgent + " " + resolution.width + "px " + resolution.height + "px " + cursorPosition.x + "px, " + cursorPosition.y + "px " + scrollDistance + "px " + time

    return (
        <p className="user-info">
            {infoString}
        </p>
    );
}

export default UserInfo;