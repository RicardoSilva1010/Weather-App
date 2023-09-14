import React from "react"; 
import "./forecast-weather.css" 

//compomente que exibi o forescast de 7 dias que recebe da resposta API
class Forecast extends React.Component{
    render() {
        const forecastItems = this.props.forecast.map((f, i) => {
                const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
                const key = `forecast-item_${i}`;
            
                let day = new Date(f.dt * 1000).getDate();
                let month = new Date(f.dt * 1000).getMonth();
                let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let monthName = monthNames[month];
                
                return (
                    <div className="forecast-item" key={key}>
                        <p className="forecast-item_hour">{day} | {monthName} {""}</p>
                        <p className="forecast-item_temp">{parseInt(f.temp.day)}ºC</p>
                        <img  src={url} alt={f.weather[0].description} />
                        <p className="forecast-item_description">{f.weather[0].main}</p>
                    </div> 
                );
        });
        
        return(
        <div className="forecast">
            <h3 className="forecast-title">Daily Forecast</h3>
            <div className="forecast-items">{forecastItems}</div>
        </div>
        );
    }
}

export default Forecast