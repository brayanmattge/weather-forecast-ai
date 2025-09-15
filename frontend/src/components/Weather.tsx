import './Weather.css'
import cloudIcon from '../assets/cloud.svg';
import rainyIcon from '../assets/rainy.svg';
import sunnyIcon from '../assets/sun.svg';
import type { WeatherForecast } from '../models/weatherForecast';

function Weather({ location, climate }: WeatherForecast) {
    let icon;

    if (climate.condition === "Sunny" || climate.condition === "Clear") {
        icon = sunnyIcon
    } else if (climate.condition === "Partly cloudy") {
        icon = cloudIcon
    } else {
        icon = rainyIcon
    }

    return (
        <div className="climate-details">
            <div className="details">
                <div className="image-container">
                    <img src={icon} alt="forecast-image" className="forecast-image"></img>
                </div>
                <div className="informations-container">
                    <h2 className="city">{location.city}</h2>
                    <h3 className="temperature">{climate.temp_c}°C</h3>
                </div>
            </div>
            <div className="more-informations">
                <div className="section">
                    <span className="label">Feels Like</span>
                    <span className="info">{climate?.feelslike_c}°C</span>
                </div>
                <div className="section borders">
                    <span className="label">Humidity</span>
                    <span className="info">{climate?.humidity}%</span>
                </div>
                <div className="section">
                    <span className="label">UV Index</span>
                    <span className="info">High</span>
                </div>
            </div>
        </div>
    )
}

export default Weather