import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { Provider } from 'react-redux'; 
import store from './app/store';
import AppContainer from './components/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
