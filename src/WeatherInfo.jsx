import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
   
   return (
   <div className="WeatherInfo">
         <div className="overview">
            <h1>{props.data.city}</h1>
                 <div><FormattedDate date={props.data.date} /></div>     
                </div>
            <div className="row current-conditions">
                <div className="col-7">
                <div className="d-flex weather-temperature">
                    <img src={props.data.icon} alt={props.data.currentCondition} />
                <span id="temperature"><strong>{props.data.temperature}</strong></span>
                <span id="units-fahrenheit">°F | °C</span>
                </div>
                </div>
                <div className="col-5">
                    <ul>
                        <li className="text-capitalize">{props.data.currentCondition}</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} mp/h</li>
                    </ul>
                </div>
            </div>
    </div>
);
}