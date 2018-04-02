import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const store = storeConfig();

const REDUX_CONNECT = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(REDUX_CONNECT, document.getElementById('root'));
registerServiceWorker();
