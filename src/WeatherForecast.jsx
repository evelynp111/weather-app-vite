import { useEffect, useState }from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.city]);

function handleResponse(response){
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
}

    if (loaded) {
        return (
    <div className="row WeatherForecast">
        {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
            return (
                <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
                </div>
            );              
            } else {
                return null;
            }

        })}
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