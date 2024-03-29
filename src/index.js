import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { Provider } from 'react-redux'; 
import store from './components/store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
