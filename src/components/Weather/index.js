import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getWeather } from "../../helpers/api";

import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';
import Navigation from '../Navigation';

class Weather extends Component {

    state = {
        isLoaded: true,
        forecast: []
	}
    
    componentDidMount() {        
        this.getForecast(this.props.city);
    }

    getForecast = async (city) => {
        const forecast = await getWeather(city, 'forecast');   
        this.setState({ forecast: forecast.list });
        
    }

    render() {

        const { isLoaded, forecast } = this.state;
        const { weather } = this.props;
        return (
            !isLoaded ?        
            null
            :
            <div>
                <h2>Weather in { weather.name }, { weather.sys.country }</h2>
                <Navigation />
                <Switch>
                    <Route
                        exact
                        path = '/'
                        render = { () => <CurrentWeather weather = { weather } />}
                    />            
                    <Route
                        exact
                        path="/5-day-forecast"
                        render={ () => <Forecast forecast = { forecast } /> }
                    />
                </Switch>
                
            </div>
        );
    }
}

export default Weather;
