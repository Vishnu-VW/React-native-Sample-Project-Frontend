export function formatTime(timeString){
    const [hourString, min] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ':' + min + (hour < 12 ? ' AM' : ' PM'); 
}