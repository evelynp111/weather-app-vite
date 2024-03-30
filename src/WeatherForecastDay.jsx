import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum)
        return `${temperature}`
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum)
        return `${temperature}`
    }

    function day () {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed", 
            "Thu",
            "Fri",
            "Sat",
        ]
        return days[day];
    }

    return (
        <div className="WeatherForecastDay">
            <div className="weatherforecast-day">{day()}</div>
                <img className="weatherforecast-icon" src={props.data.condition.icon_url} 
                        alt={props.data.condition.description}></img>
                <div className="weatherforecast-temperatures">
                <span className="weatherforecast-temp-max">{maxTemperature()}°</span>
                <span className="weatherforecast-temp-min">{minTemperature()}°</span>
            </div>
        </div>
    );
}