import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import { signUpSaga } from '../sagas/signUpSaga';

const sagaMiddleware = createSagaMiddleware();

const storeParts = compose(applyMiddleware(sagaMiddleware))(createStore);

export default function storeConfig() {
  const store = storeParts(rootReducer, initialState);
  sagaMiddleware.run(signUpSaga);
  return store;
}
