import React,{useState, useEffect} from "react";

function Timer(){
    const [sec,setSec]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setSec((sec)=>sec+1);
        },1000);
        return()=>{
            clearInterval(interval);
            }
    },[])
    return(
        <div>
            <h1>Timer</h1>
            <h2>{sec}</h2>
        </div>
        )
}
export default Timer;

// Real-life example:
// Think of this as a stopwatch that automatically starts counting when the component is mounted
// and stops when it's removed (like a stopwatch stopping when closed).