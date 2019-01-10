import React from 'react';

import styles from './styles.module.css'

const Header = ({ receiveWeather }) => {

    const submitHandle = (e) => {
        
        e.preventDefault();
        const target = e.target.city;
        
        if (target.value){
            receiveWeather(target.value);
            target.value = '';
        }
        
    }

    return (
        <section className = { styles.header }>
            <form onSubmit = { submitHandle }>
                <input
                    type = 'text'
                    name = 'city'
                    id='city'
                    placeholder = 'Enter the city name such as Kyiv, London, Berlin etc.'
                />
                <input type = 'submit' value = 'FIND' />                    
            </form>
        </section>
    );
}

export default Header;

