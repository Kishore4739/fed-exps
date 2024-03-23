import React, { useState } from "react";
function FunCounter() {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
        if (count < 10) setCount(count + 1);
    };
    const decrementHandler = () => {
        if (count > 0) setCount(count - 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementHandler}>Increment</button>&nbsp;&nbsp;
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}
export default FunCounter;