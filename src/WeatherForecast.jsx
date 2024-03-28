import { useState }from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleResponse(response){
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
}

    if (loaded) {
        return (
    <div className="row WeatherForecast">
        <div className="col">
            <WeatherForecastDay data={forecast[0]}/>
        </div>
    </div>
    );
    } else {
            let apiKey = "fbf3f590d8fa5cdo2b6a6d68f4tc4ef2";
            let city = props.city;
            let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
            
            axios.get(apiUrl).then(handleResponse);

        return null;
    }



}