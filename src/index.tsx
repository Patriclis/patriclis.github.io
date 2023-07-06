import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/Index.scss';
import App from './App';
import store from './data/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);