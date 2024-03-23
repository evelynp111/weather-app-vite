import { useState } from "react";

export default function FormattedDate(props) {
    let days = ["Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"]
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
        if (hours < 10){
            hours = `0${hours}`
        }
    let minutes = props.date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`
        }

    // if (hours >= 12) {
    //     let amPmHour = hours - 12;
    //     hours = `PM ${amPmHour}`
    // } else {
    //     hours = `AM ${amPmHour}`
    // }

    // console.log(props.date)
    return <div>
        {day} | {hours}:{minutes}
        </div>
}