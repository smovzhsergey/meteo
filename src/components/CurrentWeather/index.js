import React from 'react';

import { transformPressure, transformTemperature } from '../../helpers/api';

import { ReactComponent as Temperature } from '../../assets/icon/temp.svg';
import { ReactComponent as Pressure } from '../../assets/icon/pressure.svg';
import { ReactComponent as Humidity } from '../../assets/icon/humidity.svg';
import { ReactComponent as Wind } from '../../assets/icon/wind.svg';
import { ReactComponent as WindDirect } from '../../assets/icon/windDirect.svg';
import WeatherIcon from '../WeatherIcon';
import styles from './styles.module.css';

const CurrentWeather = ({ weather }) => {
    
    const { main : { humidity, pressure, temp }, weather: icons, wind } = weather;
    const temperature = transformTemperature(temp);

    return (
        <div className = { styles.CurrentWeather } >
            
            <WeatherIcon icons = { icons } />
            <div className = { styles.paramsWrap } >
                <div className = { styles.params } >                
                    <Temperature style = {{'width': 50 + 'px'}} />
                    <p>{ temperature } <sup>o</sup>C</p>                
                </div>
                <div className = { styles.params } >
                    <Pressure style = {{'width': 50 + 'px'}} />
                    <p>{ transformPressure(pressure) } mm Hg</p>
                </div>
                <div className = { styles.params } >
                    <Humidity style = {{'width': 50 + 'px'}} />
                    <p>{ humidity } %</p>
                </div>
                <div className = { styles.params } >
                    <Wind style = {{'width': 50 + 'px'}} />
                    <p className = { styles.wind }>{ wind.speed } m/s</p>
                    <WindDirect  style = {{'width': '30px', 'height': '30px', 'transform': `rotate(${ wind.deg-180}deg)`}} />
                </div>
                
            </div>
        </div>
    );
}

export default CurrentWeather;