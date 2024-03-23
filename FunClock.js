import React, { useState, useEffect } from 'react'
const FunClock = () => {
    const [date, setDate] = useState(new Date());
    let Update;
    useEffect(() => {
        Update = setInterval(() => {
            setDate(new Date());
        }, 1 * 1000);
        return () => {
            clearInterval(Update);
        }
    }, []);
    return (
        <div>
            <h1>Digital Clock</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    );
}
export default FunClock;