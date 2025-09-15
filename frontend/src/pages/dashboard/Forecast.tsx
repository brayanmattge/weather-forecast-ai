import './Forecast.css'
import { useState } from "react";
import { getCurrentWeather } from "../../services/weatherService";
import Weather from '../../components/Weather';
import Suggestions from '../../components/Suggestions';
import type { WeatherForecast } from '../../models/weatherForecast';

function Forecast() {
    const [data, setData] = useState<WeatherForecast | null>(null);
    const [city, setCity] = useState<string>("São Paulo");
    const [error, setError] = useState<boolean>(false);

    const searchLocation = async () => {
        try {
            const result = await getCurrentWeather(city);
            setData(result);
            setError(false);
        } catch (error) {
            setError(true);
            console.error("Error trying search forecast:", error);
        }
    };

    return (
        <>
            <div className="weather-forecast">
                <div className="header-forecast">
                    <h1 className="title">Weather Forecast</h1>
                    <input 
                        placeholder="Type city..."
                        className="search-city"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    { error === true &&
                        <span className='error-message'>Invalid city or incorrect name</span>
                    }
                    <button className="search-button" onClick={searchLocation}>Search</button>
                </div>
                
                { data != null &&
                    <div className="body-forecast fade-in">
                        <Weather location={data.location} climate={data.climate}></Weather>
                    </div>
                }
                
                { data != null &&
                    <div className="footer-forecast fade-in">
                        <Suggestions city={city} currentCity={data.location.city}></Suggestions>
                    </div>
                }
            </div>
        </>
    )
}

export default Forecast