import React from 'react';
import SearchBar from '../../components/search-bar';
import CurrentWeather from '../../components/current-weather';
import Forecast from '../../components/forecast-weather';
import {
  getCurrentWeather, 
  getForecast
} from '../../apis/open-weather.api';
import Thunderstorm from "../../assets/thunderstorm.jpg";
import Rainy from "../../assets/rainy.jpg";
import Cloudy from "../../assets/cloudy.png";
import Snow from "../../assets/snow.jpg";
import bg from "../../assets/bg.jpg";
import Clocker from '../../components/hour';
import Mist from '../../assets/mist.jpg';
import ForecastHour from '../../components/forecastHour-weather';

class ProtectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        location: 'Penafiel, Porto',
        name: '',
        country:'',
        temp: '',
        description: '',
        icon: '',
        humidity: '',
        wind: '',
        temp_min: '',
        temp_max: '',
        dailyForecast: [],
        hourlyForecast: []
    };
    this.onFormSubmit();
}

onInputChange(e){  //funçao criada na search bar
    this.setState({
        location: e.target.value
    });
}

async onFormSubmit(){
      let weatherRes = await getCurrentWeather(this.state.location);
      const lat = weatherRes.data.coord.lat;
      const lon = weatherRes.data.coord.lon;
      const forecastRes = await getForecast(lat, lon);

        this.setState({
            name: weatherRes.data.name, 
            country: weatherRes.data.sys.country,
            temp: parseInt(weatherRes.data.main.temp),
            description: weatherRes.data.weather[0].main,
            icon: weatherRes.data.weather[0].icon,
            humidity: weatherRes.data.main.humidity,
            wind: weatherRes.data.wind.speed,
            temp_min: parseInt(weatherRes.data.main.temp_min),
            temp_max: parseInt(weatherRes.data.main.temp_max),
            dailyForecast: forecastRes.data.daily,
            hourlyForecast: forecastRes.data.hourly
        });
    }

   //html 
  render(){
    return (
    <div className="App"
    style={
      this.state.description?.toLowerCase() === "clear" || 
      this.state.description?.toLowerCase() === "sunny"
        ? { backgroundImage:`url(https://images.unsplash.com/photo-1641236542612-f63b14f8168c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&)` }
        : this.state.description?.toLowerCase().includes("rain")
        ?{ backgroundImage: `url(${Rainy})`}
        : this.state.description?.includes("Clouds") 
        ? { backgroundImage: `url(${Cloudy})` }
        :this.state.description?.toLowerCase().includes("thunderstorm")
        ? {backgroundImage: `url(${Thunderstorm})`}
        :this.state.description?.toLowerCase().includes("mist")
        ? {backgroundImage: `url(${Mist})`}
        :this.state.description?.toLowerCase().includes("snow")
        ? {backgroundImage: `url(${Snow})`}
        :this.state.description?.toLowerCase().includes("dust")
        ? {backgroundImage: `url(https://images.unsplash.com/photo-1530867500740-c0def037d2c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&)`}
        : { backgroundImage: `url(${bg})` }
    }>
      <header className="App-header">
        <div>
          <div className='content_CurrentWeather'>
            <SearchBar  
            location={this.state.location} 
            inputChange={e => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}
            />
            <CurrentWeather 
            name={this.state.name}
            country={this.state.country}
            currentTemperature = {this.state.temp} 
            description={this.state.description}
            icon={this.state.icon}
            humidity={this.state.humidity}
            wind={this.state.wind} 
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            />
            <Clocker />
          </div>
        </div>
            <Forecast forecast={this.state.dailyForecast}/>
            <ForecastHour forecast={this.state.hourlyForecast}/>
      </header>
    </div>
  );
  }
}

export default ProtectPage;