export function getRemainingTimeUtilsMsTimestamp(timestampMs) {
    let remainingTimeMs = timestampMs - +new Date(); 
    let remainingDays = Math.floor(remainingTimeMs / (1000 * 60 * 60 * 24)) 
    let remainingHours = Math.floor(remainingTimeMs / (1000 * 60 * 60) % 24)
    let remainingMinutes = Math.floor(remainingTimeMs / (1000 * 60) % 60)
    let remainingSeconds = Math.floor(remainingTimeMs / (1000) % 60)
    remainingDays = padWithZeros(remainingDays, 2);
    remainingHours = padWithZeros(remainingHours, 2);
    remainingMinutes = padWithZeros(remainingMinutes, 2);
    remainingSeconds = padWithZeros(remainingSeconds, 2);

    return {
        days: remainingDays, 
        hours: remainingHours, 
        minutes: remainingMinutes, 
        seconds: remainingSeconds
    }
}
function padWithZeros(number, minLength) {
    let numberString = number.toString()
    let text = "0"
    if(numberString.length > minLength) return numberString
    // numberString = text.repeat(1)
    for(let i = 0; i < minLength - numberString.length; i++)
        numberString = text + numberString
    return numberString; 
}