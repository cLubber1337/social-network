import {useEffect, useState} from "react";
import React from "react";


const Clock = () => {

    const [date, setDate] = useState(getTime())

    useEffect(() => {
        let intervalId = setInterval(() => {
            console.log("tick")
            setDate(getTime())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        };
    }, [])

    function getTime() {
        const time = new Date()
        let hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours()
        let minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes()
        let seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
        return {hours, minutes, seconds} // {02, 54, 05}
    }



    return (
        <div>
            <h2>
                <span style={{color: "red"}}>{date.hours}</span>
                :<span style={{color: "blue"}}>{date.minutes}</span>
                :<span style={{color: "green"}}>{date.seconds}</span>
            </h2>
        </div>
    );
}

export default Clock;