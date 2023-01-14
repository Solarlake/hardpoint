import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import MouseContextProvider from './context/MouseContext';

ReactDOM.render(
    <MouseContextProvider>
        <App />
    </MouseContextProvider>
    ,
    document.getElementById('root')
);