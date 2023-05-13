import React from "react";
import ReactDOM from "react-dom";

import image from "next/image"

export default function WeeklyWheater({ weeklyweather, timezone }) {
    return(
        <div className="weekly-weather">
            <h3 className="weekly_title">
                Weekly <span>Wheater</span>
            </h3>
            
            {weeklywheather.length > 0 &&
            weeklywheather.map((weather, index)) =>
                 if (index == 0) {
                    return;
                 }

                return ( 
                    <div className="weekly__card" key={weather.dt}></div>
                )
            }



        </div>
    )
}