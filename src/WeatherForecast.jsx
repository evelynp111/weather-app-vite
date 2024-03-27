import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
    console.log(response.data);
}

    let apiKey = "fbf3f590d8fa5cdo2b6a6d68f4tc4ef2";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return (
    <div className="row WeatherForecast">
        <div className="col">
        <div className="weatherforecast-day">Thu</div>
            <div className="weatherforecast-icon">🌤️</div>
            <div className="weatherforecast-temperatures">
                <span className="weatherforecast-temp-max">64°</span>
                <span className="weatherforecast-temp-min">55°</span>
            </div>
        </div>
    </div>
    );
}