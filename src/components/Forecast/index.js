import React from 'react';
import moment from 'moment';
import styles from './styles.module.css';

import { transformPressure, transformTemperature } from "../../helpers/api";

import WeatherIcon from '../WeatherIcon';
import { ReactComponent as WindDirect } from '../../assets/icon/windDirect.svg';

const Forecast = ({ forecast }) => {

    const forecastList = forecast.map(({dt, dt_txt, main, weather, wind}, index) => {
        const hour = moment(dt*1000).format('HH:mm');

        const printDay = index === 0 ?
            <tr className = { styles.dayHeader } >
                <td colSpan = '7'>{ moment(dt*1000).format('ddd, D MMMM YYYY') }</td>
            </tr>           
            :
            hour === '00:00' || hour === '01:00' || hour === '02:00' ?
                <tr className = { styles.dayHeader } >
                    <td colSpan = '7'>{ moment(dt*1000).format('ddd, D MMMM YYYY') }</td>
                </tr>
                :
                null;
        
        
        return (
            <React.Fragment key = { dt }>
                {printDay}
                {printDay &&
                <>
                    <tr className = { styles.topBorderedRow }>
                        <td></td>
                        <td></td>
                        <td>Temperature,</td>
                        <td>Air pressure,</td>
                        <td>Humidity,</td>
                        <td colSpan = '2'>Wind,</td>
                    </tr>
                    <tr className = { styles.bottomBorderedRow }>
                        <td></td>
                        <td></td>
                        <td><sup>o</sup>C</td>
                        <td> mm Hg</td>
                        <td>%</td>
                        <td colSpan = '2'>m/s</td>
                        
                    </tr>
                    </>
                }
                <tr >
                    <td>{ moment(dt*1000).format('HH:mm') }</td> 
                    <td><WeatherIcon icons = { weather } display = {'inline-block'} info = { false } /> </td>
                    <td>{ transformTemperature(main.temp) }</td>
                    <td>{ transformPressure(main.pressure) }</td>
                    <td>{ main.humidity }</td>
                    <td>
                        { wind.speed }   
                        
                    </td>
                    <td>
                    <WindDirect  style = {{'width': '25px', 'height': '25px', 'transform': `rotate(${ wind.deg-180}deg)`}} />
                    </td>
                </tr>

            </React.Fragment>
        );
    });

    

    return ( 
        <table className = { styles.wrap }>
            <tbody className = {styles.wrap}>
                { forecastList }
            </tbody>
        </table>
        
    );
}

export default Forecast;