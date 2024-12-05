import React from "react";
import "./Weather.css"
import search_icon from "./Assets/icons8-search-50.png";
import humidity_icon from "./Assets/icons8-humidity-50.png";
import sunny_icon from "./Assets/icons8-summer-48.png";
import cloud_icon from "./Assets/icons8-cloud-48.png";
import rain_icon from "./Assets/icons8-rain-48.png";
import snow_icon from "./Assets/icons8-snow-48.png";
import thunder_icon from "./Assets/icons8-storm-48.png";
import wind_icon from "./Assets/icons8-wind-48.png";




const WeatherApp = () => {
    return (
        <div className="container">
            <div className="top">
                <input type="text" className="city" placeholder="Enter City Name" />
                <div className="search_icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weater_img">
                <img src={sunny_icon} alt=""/>
            </div>
            <div className="temperature">32°C</div>
            <div className="location">Skopje</div>
            <div className="datawrap">
                <div className="data_element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity">47%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="data_element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity">8km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp