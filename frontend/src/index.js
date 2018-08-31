import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (rootElement) {
  const fruits = JSON.parse(rootElement.dataset.fruits);
  ReactDOM.render(<App fruits={fruits} />, rootElement);
  registerServiceWorker();
}
