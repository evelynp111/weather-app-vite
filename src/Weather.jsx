import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
const [weatherData, setWeatherData] = useState({ ready: false  });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
setWeatherData({
    ready: true,
    date: new Date(response.data.time * 1000),
    temperature: Math.round(response.data.temperature.current),
    currentCondition: response.data.condition.description,
    humidity: response.data.temperature.humidity,
    wind: Math.round(response.data.wind.speed),
    city: response.data.city,
    icon: response.data.condition.icon_url,
});
}

function handleSubmit(event){
    event.preventDefault();
    search();
    //search for a city
}

function handleCityChange(event){
    setCity(event.target.value);
}

function search(){
    const apiKey = "fbf3f590d8fa5cdo2b6a6d68f4tc4ef2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
    axios.get(apiUrl).then(handleResponse);
}

if(weatherData.ready){
    return(
        <div className="Weather">
            <div className="weather-app">
                <div className="searchBar">
                <form className="d-flex justify-content-end mb-3" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Type a city name..." onChange={handleCityChange} className="searchBarInput"/>
                    <input type="submit" value="Search" className="btn btn-secondary" />
                </form>
                </div>
                <WeatherInfo data= {weatherData} />
                <WeatherForecast city ={weatherData.city}/>
            </div>
        </div>
    ); 
} else{
    search();
    return "Loading...";
}

}