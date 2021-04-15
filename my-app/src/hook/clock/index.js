import TimeClock from './components/time'
import {useState} from 'react'


const ClockApp = () => {
    const [showTime, setShowTime] = useState(true);
    const showHideTime = () =>{
        setShowTime(false)
    }

    
    return(
        <>
            {showTime && <TimeClock></TimeClock>}
            <button
                onClick={() => showHideTime()}
            >remove clock</button>
        </>
    )
}
export default ClockApp;