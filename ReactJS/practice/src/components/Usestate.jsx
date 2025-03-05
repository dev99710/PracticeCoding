import React, {useState} from "react";

function Counter(){
    const [count,setCount]=useState(0);

    return(
        <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>
        Increase
        </button>
        <button onClick={()=>setCount(count-1)}>
            Decrease
        </button>
        </div>
    )
}
export default Counter;


// Real-life example: 
// Imagine this as a shopping cart where "count" represents the number of items in the cart.
// Clicking the "Increment" button adds an item, while the "Decrement" button removes one.