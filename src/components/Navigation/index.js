import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const Navigation = () => (
    <div className = { styles.navWrap }>
        <NavLink
            exact
            to = '/'
            activeClassName = { styles.activeLink }
        >
            Now
        </NavLink>
        <NavLink
            to = '/5-day-forecast'
            activeClassName = { styles.activeLink }
        >
            5 day forecast
        </NavLink>        
    </div>

);

export default Navigation;