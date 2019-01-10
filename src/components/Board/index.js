import React, { Component } from 'react';

import styles from './styles.module.css'
import { getWeather } from "../../helpers/api";

import Header from '../Header';
import Weather from '../Weather';

class Board extends Component {

	state = {
		city: undefined,
		weather: {},
		errorMessage: undefined,
	}

	receiveWeather = async (city) => {	
		const response = await getWeather(city, 'weather');

		if (typeof response === 'object') {
			this.setState({
				city,
				errorMessage: undefined,
				weather: response
			});
		} else {
			this.setState({
				city: undefined,
				errorMessage: response,
				weather: undefined
			});
		}
	}

	render() {
		
		const { city, errorMessage, weather } = this.state;
		
		return (
			<section className = { styles.board } >
				<h1>Weather for you</h1>				
				<Header receiveWeather = { this.receiveWeather } />
				{ errorMessage && <h2>{ errorMessage }</h2> }
				{ city &&
					<Weather
						weather = { weather }
						city = { city }
					/>
				}
				<p className = {styles.bottom}><a href = "https://openweathermap.org/api">OpenWeatherMapAPI</a></p>
			</section>			
		);

	}
}

export default Board;
