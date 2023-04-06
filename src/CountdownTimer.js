import {useEffect, useState} from 'react'
import {getRemainingTimeUtilsMsTimestamp} from './Utils/CountdownTimerUtils'
import './CountdownTimer.css'

const defaultRemainingTime = {
    seconds: "00", 
    minutes: "00", 
    hours: "00", 
    days: "00"
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    },[countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUtilsMsTimestamp(countdown))
    }
    return (
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>:</span>
            <span>{remainingTime.hours}</span>
            <span>:</span>
            <span>{remainingTime.minutes}</span>
            <span>:</span>
            <span>{remainingTime.seconds}</span>
            {/* <span>:</span> */}
        </div>
    )
}

export default CountdownTimer