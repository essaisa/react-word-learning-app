import { useState } from "react"
import { convertMilliseconds, countdownIn24Hours } from "../utils"

export default function Countdown(props) {

    const {handleChangePage, daysWords, datetime, day } = props

    const targetMillis = datetime || Date.UTC(1944, 2, 17, 12, 0, 0)

    const [remainingMs, setRemainingMs] = useState(countdownIn24Hours(targetMillis))
    const timer = convertMilliseconds(remainingMs)


    
    
    return (
        <div className="card countdown-card">
            <h1 className="item-header">Day {day}</h1>
            <div className="today-container">
                <div>
                    <p> Time remaining</p>
                    <h3> {datetime ? `${Math.abs(timer.hours)}H ${Math.abs(timer.minutes)}M ${Math.abs(timer.seconds)}S` : '24H 60M 60S'} </h3>
                </div>
                <div>
                    <p>Words for today</p>
                    <h3>{daysWords.length}</h3>
                </div>
            </div>

            <button className="" onClick={() => {handleChangePage(2)}}>
                <h6>Start</h6>
            </button>
            
        </div>
    )
}