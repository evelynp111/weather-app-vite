import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return <div className="row WeatherForecast">
        <div className="col">
        <div className="weatherforecast-day">Thu</div>
            <div className="weatherforecast-icon">🌤️</div>
            <div className="weatherforecast-temperatures">
                <span className="weatherforecast-temp-max">64°</span>
                <span className="weatherforecast-temp-min">55°</span>
            </div>
        </div>
        </div>
}