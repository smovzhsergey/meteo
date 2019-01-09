import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Board from './components/Board';

ReactDOM.render(
    <Router>
        <Board />
    </Router>,
    document.getElementById('root')
);
