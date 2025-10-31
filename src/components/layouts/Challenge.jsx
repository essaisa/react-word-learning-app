import ProgressBar from "../ProgressBar"

export default function Challenge(props){

    const { handleChangePage } = props

    const word = 'lugubrious'
    const defintion = 'Excessively mournful or gloomy'
    return (
        <section id="challenge">
            <h3 className="special-shadow-3">Challenge</h3>
            <h1>{word}</h1>
            <p>{defintion}</p>
            <div className="helper">
                <div>
                    {/* ERROR CORRECTION VISUAL BARS */}
                    {[...Array(defintion.length).keys()].map((element, eleIdx) => {
                        return (
                            <div key={eleIdx}></div>
                        )
                    })}

                </div>
                <input type="text" placeholder="Enter The Player"/>
            </div>

                <div className="challenge-btns">
                    <button className="card-button-secondary" onClick={() => {handleChangePage(1)}}>
                        <h6>Quit</h6>
                    </button>
                    <button className="card-button-primary">
                        <h6>I forgot</h6>
                    </button>
                </div>
                <ProgressBar/>
        </section>
    )
}