import React, {useState, useEffect} from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const getTimeChangeZoneString = () => {
    const franceTime = new Date(Date.now()).toLocaleTimeString("fr-FR", {timeZone: "Europe/Paris"});
    return franceTime;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());
    const [timeChangeZone, setTimeChangeZone] = useState(getTimeChangeZoneString());
    

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            let france = getTimeChangeZoneString();
            setTimeChangeZone(france);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>Indianapolis, USA - {time}</p>
            <p>Paris, France - {timeChangeZone}</p>
        </div>
    )
}

export default ClockApp;