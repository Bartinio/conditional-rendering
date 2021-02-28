import React ,{ useState } from "react";

function Time() {

    
    setInterval(getCurrentTime, 1000);
    const now = new Date().toLocaleTimeString();
    
    const [currentTime, setTime] = useState(now)

    function getCurrentTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)  
    }

    return <div>
        <h1>{currentTime}</h1>
        <button onClick={getCurrentTime} className="btn">GET TIME</button>
    </div>
}


export default Time;