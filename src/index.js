import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/store';

// styles
import './index.css';
import './iziToast.min.css';
import 'semantic-ui-css/semantic.min.css';

// components
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = storeConfig();

const REDUX_CONNECT = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(REDUX_CONNECT, document.getElementById('root'));
registerServiceWorker();
