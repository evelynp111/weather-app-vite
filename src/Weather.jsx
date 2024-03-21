import React from "react";
import "./Weather.css";

export default function Weather(){

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
            <h1>Los Angeles</h1>
                 <p>Wednesday | 07:00</p>     
                </div>
            <div className="row current-conditions">
                <div className="col-7">
                <div className="d-flex weather-temperature">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" />
                <span id="temperature"><strong>73</strong></span>
                <span id="units-fahrenheit">°F | °C</span>
                </div>
                </div>
                <div className="col-5">
                    <ul>
                        <li>Sunny</li>
                        <li>Humidity: 21%</li>
                        <li>Wind: 4 mp/h</li>
                    </ul>
                </div>
            </div>
            </div>
            <footer>This project was coded by {" "}
                <a href="https://github.com/evelynp111" target="_blank">
                    Evelyn {" "}
                </a>
                    and is open-sourced on {" "}    
                <a href="https://github.com/evelynp111" target="_blank">
                    GitHub 
                </a>.
            </footer>
        </div>
    )
}