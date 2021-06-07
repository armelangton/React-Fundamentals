import React, {useState, useEffect} from 'react';

const TimerApp = () => {

    const [secondsElapsed, setSecondsElaspsed] = useState(0);

    const tick = () => setSecondsElaspsed(secondsElapsed + 1);

    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);
        console.log(interval);
        return() => clearInterval(interval);
    });


    return(
        <>
            <h1 className="sesction-title">React Timer</h1>
            <div>Seconds Elapsed: {secondsElapsed}</div>
        </>
    );
};

export default TimerApp;