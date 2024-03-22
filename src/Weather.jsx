import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
const[ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({ ready: false  });


function handleResponse(response){

console.log(response.data);
setWeatherData({
    ready: true,
    date: "Wednesday | 07:00",
    temperature: Math.round(response.data.temperature.current),
    currentCondition: response.data.condition.description,
    humidity: response.data.temperature.humidity,
    wind: Math.round(response.data.wind.speed),
    city: response.data.city,
    icon: response.data.condition.icon_url,
})

}

if(weatherData.ready){
    return(
        <div className="Weather">
            <div className="weather-app">
                <div className="searchBar">
                <form className="d-flex justify-content-end mb-3">
                    <input type="text" placeholder="Type a city name..."/>
                    <input type="submit" value="Search" className="btn btn-secondary"/>
                </form>
                </div>
                <div className="overview">
            <h1>{weatherData.city}</h1>
                 <p>{weatherData.date}</p>     
                </div>
            <div className="row current-conditions">
                <div className="col-7">
                <div className="d-flex weather-temperature">
                    <img src={weatherData.icon} alt={weatherData.currentCondition} />
                <span id="temperature"><strong>{weatherData.temperature}</strong></span>
                <span id="units-fahrenheit">°F | °C</span>
                </div>
                </div>
                <div className="col-5">
                    <ul>
                        <li className="text-capitalize">{weatherData.currentCondition}</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} mp/h</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    ) 
}else{
    const apiKey = "fbf3f590d8fa5cdo2b6a6d68f4tc4ef2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
}

}