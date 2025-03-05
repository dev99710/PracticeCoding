import React,{useContext, useState, createContext} from "react"

const CounterContext=createContext()

function App(){
    const [count, setCount]=useState(0);

    const increment=()=> setCount((prev)=> prev+1);
    const decrement=()=> setCount((prev)=> prev-1);

    return(
        <div>
            <h1>React With Dynamic State</h1>
            <CounterContext.Provider value={{count,increment,decrement}}>
            <DisplayCounter/>
            <IncrementCounter/>
            <DecrementCounter/>
            </CounterContext.Provider>
        </div>
    )
}

function DisplayCounter(){
    const { count } = useContext(CounterContext);
    return(
        <div>
            <h2>Count: {count}</h2>
        </div>
    );
}

function IncrementCounter(){
    const { increment } = useContext(CounterContext);
    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
function DecrementCounter(){
    const { decrement } = useContext(CounterContext);
    return(
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default App;  //exporting the App component