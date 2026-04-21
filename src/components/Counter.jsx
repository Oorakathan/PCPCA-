import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(-1);

    function handleClick(){
      setCount(count+1);
    }

    
    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleClick}>click!</button>
        </>
    );

};
export default Counter;