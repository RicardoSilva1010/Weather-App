import React from "react";
import './forecastHour-weather.css'

class ForecastHour extends React.Component{
    render() {
        const forecastHourItems = this.props.forecast.map((h, z) => {
            const url = `http://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`;
            const key = `forecast-item_${z}`;
            
            let hour = new Date(h.dt * 1000).getHours();
            let ampm = "AM";
            
            if(hour > 12) {
                hour = hour - 12;
                ampm = "PM"
            }

            return(
                <div className="forecastHour-item" key={key}>
                    <p className="forecastHour-item_hour">{hour}:00 {ampm} {""}</p>
                    <p className="forecastHour-item_temp">{parseInt(h.temp)}ºC</p>
                    <img  src={url} alt={h.weather[0].description} />
                    <p className="forecastHour-item_description">{h.weather[0].main}</p>
                </div>
            );
        });

        return(
            <div className="forecastHour">
                <h3 className="forecastHour-title">Hourly Forecast</h3>
                <div className="forecastHour-items">{forecastHourItems}</div>
            </div>
        )
    }
}

export default ForecastHour