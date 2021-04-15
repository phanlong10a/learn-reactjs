import { useEffect, useState } from 'react'



const TimeComponent=()=>{
    const [timeString, setTimeString] = useState(null);


    // components did mount

    useEffect(()=>{
        let setintervalTime= setInterval(() => {
            const now = new Date();
            const hours = `0${now.getHours()}`.slice(-2);
            const minutes = `0${now.getMinutes()}`.slice(-2);
            const seconds = `0${now.getSeconds()}`.slice(-2);
            const currentTimeString = `${hours}:${minutes}:${seconds}`;
            setTimeString(currentTimeString)
        }, 1000);

        return () => {
            clearInterval(setintervalTime)
        }
    },[])
        
    return(
    <h1>currentTime: {timeString}</h1>
    )
}
export default TimeComponent;