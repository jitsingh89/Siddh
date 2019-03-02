import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/assets/style/main.scss';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import configureStore from './src/store/storeconfig';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>     
    </Provider>,
    document.querySelector('#root'),
);
