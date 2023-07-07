import { useEffect, useState } from 'react'
import { getRemainingTimeUtilsMsTimestamp } from '../utils/CountdownTimerUtils'

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00"
}

const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUtilsMsTimestamp(countdown));
    }
    return (
        <>
            {countdownTimestampMs <= +new Date() ?
                <div countdown='coutndown-time'>Time Up</div> :
                <div className="countdown-timer">
                    <span>{remainingTime.days}</span>
                    <span>:</span>
                    <span>{remainingTime.hours}</span>
                    <span>:</span>
                    <span>{remainingTime.minutes}</span>
                    <span>:</span>
                    <span>{remainingTime.seconds}</span>
                </div>
            }
        </>
    )
}

export default CountdownTimer