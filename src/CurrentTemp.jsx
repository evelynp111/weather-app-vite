import { useState } from "react";

export default function CurrentTemp(props){
const [unit, setUnit] = useState("fahrenheit");
function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
}

function celsius () {
    return Math.round((props.fahrenheit - 32) * 5/9);
}

if (unit === "fahrenheit") {
   return (
    <span className="CurrentTemp d-flex">
        <span><strong>{props.fahrenheit}</strong></span>
        <span>°F | <a href="/" onClick={showCelsius}>°C</a></span>
    </span>
); 
} else {
    return (
        <span className="CurrentTemp d-flex">
            <span><strong>{celsius()}</strong></span>
            <span><a href="/" onClick={showFahrenheit}>°F</a> | °C</span>
        </span>
    ); 
}
}