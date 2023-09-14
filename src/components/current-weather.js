import React from "react";
import "./current-weather.css"
import OpacityIcon from '@mui/icons-material/Opacity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirIcon from '@mui/icons-material/Air';

//compomente que exibi na DOM o que recebe da resposta API
class CurrentWeather extends React.Component {
    render() {
        let img;
        if(this.props.icon) {
            const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
            img = (< img
            className="current-weather_icon"
            src={url}
            alt={this.props.description}
            />
            );
        }

        //return html 
        return(
        <div className="current-weather">
            <div className="current-weather_content">
                <div className="subclass_current-weather_content">
                <LocationOnIcon />
                <span className="current-weather_name">{this.props.name}, {this.props.country}</span>
                </div>
                <p className="current-weather_temp">{this.props.currentTemperature}ºC</p>
                <span className="current-weather_description">{this.props.description}</span>
            </div>
             {img}
             <div className="current-weather_air">
                <OpacityIcon />
                <span>{this.props.humidity} %</span>
                <span className="iconAir"><AirIcon /></span>
                <span>{this.props.wind} km/h</span>
             </div>
            <div className="current-weather_minmax">
                <p className="current-weather_mintemp">Min. {this.props.temp_min}ºC</p>
                <p className="current-weather_maxtemp">Máx. {this.props.temp_max}ºC</p>
            </div>
        </div>
        );
    }
}

export default CurrentWeather;