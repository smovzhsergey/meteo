import React from 'react';

import styles from './styles.module.css';

const WeatherIcon = ({ icons, info = true }) => {
    
    const iconsList = icons.map((el, index) => (
        <figure key = { el.id } >
            <img
                src = { `http://openweathermap.org/img/w/${ el.icon }.png` }
                alt = { el.main }
                width = { info ? 60 : 50 }
                height = { info ? 60 : 50 }
                title = { el.description }
            />
            <figcaption>{ info && el.description }</figcaption>   
        </figure>
    ));   

    return (
        <div className = { styles.iconWrap }>
            { iconsList }
        </div>
    );
};

export default WeatherIcon;