import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentTemp from "./CurrentTemp";

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
            <CurrentTemp fahrenheit={props.data.temperature} />
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