import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { history } from '../app';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';

export default function configureStore(initialState, debug = false) {
  let createStoreWithMiddleware;

  console.log('History', history);
  const rMiddleware = routerMiddleware(history);
  const middleware = applyMiddleware(thunk, rMiddleware);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  createStoreWithMiddleware = composeEnhancers(middleware);
  const store = createStoreWithMiddleware(createStore)(
    rootReducer,
    initialState
  );
  return store;
}
