import ProgressBar from '../components/ProgressBar'

export default function Stats() {

    const name = "Essa"
    const day = 10

    return (
        <div className="card stats-card">
            <div className="welcome-text">
                <h6>Welcome</h6>
                <h4 className="text-large">
                    {name}
                </h4>
            </div>

            <div className="stats-column">
                <div>
                    <p> Streak 🔥</p>
                    <h4> {day - 1} </h4>
                </div>
                <div>
                    <p> Words Seen</p>
                    <h4> {day - 1} </h4>
                </div>
                <div>
                    <p> Accuracy (%)</p>
                    <h4> {93.3.toFixed(2)} </h4>
                </div>
            </div>
            <ProgressBar/>
        </div>
    )
    
}