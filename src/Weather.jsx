import "./Weather.css";

export default function Weather(){

    return(
        <div className="Weather">
            <div className="weather-app">
            <h1>Los Angeles</h1>
                 <p>Wednesday 07:00</p>           
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" />
                <p>73°F</p>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Mostly Cloudy</li>
                        <li>Humidity: 21%</li>
                        <li>Wind: 4 mp/h</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}